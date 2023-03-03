import React from "react";
import BillDetails from "./BillDetails";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <CartItems />
          <BillDetails />
        </div>
      </div>
    </main>
  );
};

export default Cart;
