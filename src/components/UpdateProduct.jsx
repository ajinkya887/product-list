import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productForm, setProductForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data.");
        }
        const data = await response.json();
        setProductForm(data);
      } catch (err) {
        setError(err.message);
        console.log("Error: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProductForm({
      ...productForm,
      [e.target.name]:
        e.target.name === "price" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productForm),
      });

      if (!response.ok) {
        throw new Error("Failed to update product.");
      }

      alert("Product updated successfully!");
      navigate(`/product/${id}`);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Update Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          className="bg-blue-600 hover:bg-blue-700 my-8 text-blue-400 font-bold rounded-lg shadow-md transition transform hover:scale-105"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
