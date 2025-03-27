import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", product);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
          placeholder="ID"
          required
        />
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
