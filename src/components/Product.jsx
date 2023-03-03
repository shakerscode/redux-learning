import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/actions";
import { reduceQuantity } from "../redux/products/actions";

const Product = ({ product }) => {
  const { id, name, price, cat, quantity, preview } = product;
  const dispatch = useDispatch()
 
  const carItem = {
    id,
    name,
    price,
    cat,
    preview,
    quantity: 1
  }

  const handleAddToCart = (id) => {
    dispatch(reduceQuantity(id))  
    dispatch(addToCart(carItem))
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={preview} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{cat}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button disabled={quantity===0} className="lws-btnAddToCart" onClick={() => handleAddToCart(id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
