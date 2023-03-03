import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./cartItem";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cart);
 

  return (
    <div className="space-y-6">
      {cartItems.length === 0
        ? "No item in the cart"
        : cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} />
          ))}
    </div>
  );
};

export default CartItems;
