import React from "react";
import { useSelector } from "react-redux";

const Navbar = ({show, setShow}) => {
  const cartItems = useSelector((state) => state.cart.cart);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
        </a> 
        <div className="flex gap-4">
          <a onClick={() => setShow(false)} href="#home" className="navHome" id="lws-home"> 
            Home 
          </a>
          <a onClick={() => setShow(true)} className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalQuantity}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
