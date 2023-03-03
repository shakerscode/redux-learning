import { ADDTOCART, DECREASEQUANTITY, DELETEFROMCART, INCREASEQUANTITY } from "./actionType";
import { initialState } from "./initialState";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        const updatedItem = {
          ...state.cart[existingItemIndex],
          quantity: state.cart[existingItemIndex].quantity + 1
        };
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }
      case INCREASEQUANTITY:
        const existingQuantityIndex = state.cart.findIndex(item => item.id === action.payload);

        const updatedItem = {
          ...state.cart[existingQuantityIndex],
          quantity: state.cart[existingQuantityIndex].quantity + 1
        };
        const updatedCart = [...state.cart];
        updatedCart[existingQuantityIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart
        }
        case DECREASEQUANTITY:
            const existingQntIndex = state.cart.findIndex(item => item.id === action.payload);
    
            const updatedItems = {
              ...state.cart[existingQntIndex],
              quantity: state.cart[existingQntIndex].quantity - 1
            };
            const updatedCartArr = [...state.cart];
            updatedCartArr[existingQntIndex] = updatedItems;
            return {
              ...state,
              cart: updatedCartArr
            };

            case DELETEFROMCART: 
            return{
              ...state,
              cart:  state.cart.filter(c=> c.id !== action.payload)
            }

    default:
      return state;
  }
};

export default cartReducer;
