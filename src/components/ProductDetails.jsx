import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading....</p>;
  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-purple-50 shadow-lg rounded-2xl mt-10">
        <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
        <p className="text-lg font-semibold text-gray-700 mt-2">
          ${product.price}
        </p>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-gray-500 mt-1 italic">{product.category}</p>
        <img
          className="w-48 h-48 object-contain mt-4 mx-auto border-2 rounded p-2"
          src={product.image}
          alt={product.title}
        />
        <br />
        <span mt-4 text-gray-700>
          Rating - {product.rating.rate} ⭐ || Rating - {product.rating.count}
        </span>
      </div>
      <button
        onClick={() => navigate(`/update-product/${id}`)}
        className="bg-blue-600 hover:bg-blue-700 my-8 text-blue-400 font-bold rounded-lg shadow-md transition transform hover:scale-105"
      >
        Update Product
      </button>
    </>
  );
};

export default ProductDetails;
