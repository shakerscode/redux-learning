import { ADDTOCART, DECREASEQUANTITY, DELETEFROMCART, INCREASEQUANTITY } from "./actionType"

export const addToCart = (data) =>{
    return{
        type: ADDTOCART,
        payload: data
    }
}
export const deleteFromCart = (id) =>{
    return{
        type: DELETEFROMCART,
        payload: id
    }
}
export const increaseQuantity = (id) =>{
    return{
        type: INCREASEQUANTITY,
        payload: id
    }
}
export const decreaseQuantity = (id) =>{
    return{
        type: DECREASEQUANTITY,
        payload: id
    }
}