import { ADDPRODUCT, REDUCEQUANTITY } from "./actionType"

export const addProduct = (data) => {
    return {
        type: ADDPRODUCT,
        payload: data
    }
}
export const reduceQuantity = (id) => {
    return {
        type: REDUCEQUANTITY,
        payload: id
    }
}