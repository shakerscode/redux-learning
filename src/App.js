import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductsFrom from "./components/ProductsFrom";

function App() {
  const [show, setShow] =useState(false)
  return (
    <>
      <Navbar show={show} setShow={setShow}/>
      {
        show ? <Cart/>
        :
         <main className="py-16">
        <div className="productWrapper">
          <Products />
          <ProductsFrom />
        </div> 
      </main>
      }
      
    </>
  );
}

export default App;
