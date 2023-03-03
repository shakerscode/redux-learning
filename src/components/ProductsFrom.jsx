import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/actions";

const ProductsFrom = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const [data, setData] = useState({ 
    name: "",
    cat: "",
    preview: "",
    price: 0,
    quantity: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(data)); 
    formRef.current.reset();
  };
  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          ref={formRef}
        >
          <div className="space-y-2">
            <label for="lws-inputName">Product Name</label>
            <input
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
            />
          </div>
          <div className="space-y-2">
            <label for="lws-inputCategory">Category</label>
            <input
              onChange={(e) => setData({ ...data, cat: e.target.value })}
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
            />
          </div>
          <div className="space-y-2">
            <label for="lws-inputImage">Image Url</label>
            <input
              onChange={(e) => setData({ ...data, preview: e.target.value })}
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label for="ws-inputPrice">Price</label>
              <input
                onChange={(e) => setData({ ...data, price: e.target.value })}
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
              />
            </div>
            <div className="space-y-2">
              <label for="lws-inputQuantity">Quantity</label>
              <input
                onChange={(e) => setData({ ...data, quantity: e.target.value })}
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
              />
            </div>
          </div>
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductsFrom;
