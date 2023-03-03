import { ADDPRODUCT, REDUCEQUANTITY } from "./actionType";
import { initialState } from "./initialState";

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      const lastId = state.products.length > 0 ? state.products[state.products.length - 1].id : 0;
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: lastId + 1,
            ...action.payload
          }
        ]
      };
    case REDUCEQUANTITY: 
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload && product.quantity > 0) {
            return {
              ...product,
              quantity: product.quantity - 1
            };
          } else {
            return product;
          }
        })
      };
    default:
      return state;
  }
};

export default productReducer;
