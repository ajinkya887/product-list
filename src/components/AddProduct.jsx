import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  // const [id, setId] = useState(21);
  const [productForm, setProductForm] = useState({
    id: 21,
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setProductForm({
      ...productForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", productForm);
    try {
      const response = await fetch(`https://fakestoreapi.com/products`, {
        method: "POST",
        body: JSON.stringify(productForm),
      });
      // setId(id + 1);
      setProductForm({
        // id: id,
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });
    } catch (err) {
      console.log("Error adding the product:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="block font-semibold">
          Title:
          <input
            type="text"
            name="title"
            value={productForm.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block font-semibold">
          Price:
          <input
            type="number"
            name="price"
            value={productForm.price}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block font-semibold">
          Description:
          <input
            type="text"
            name="description"
            value={productForm.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block font-semibold">
          Category:
          <input
            type="text"
            name="category"
            value={productForm.category}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block font-semibold">
          Image URL:
          <input
            type="text"
            name="image"
            value={productForm.image}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </label>
        <button
          type="submit"
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-blue-400 font-bold rounded-lg shadow-md transition transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
