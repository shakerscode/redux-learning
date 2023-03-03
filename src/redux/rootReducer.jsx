import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import productReducer from "./products/reducer";


const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
})
export default rootReducer