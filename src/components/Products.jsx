import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
    const productsData = useSelector(state => state.products.products)
    
  return (
    <div className="productContainer" id="lws-productContainer">
      { productsData.length === 0 ? "No data available" :
        productsData.map(product => <Product product={product} key={product.id}/> )
      }
    </div>
  );
};

export default Products;
