import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading....</p>;
  return (
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
  );
};

export default ProductDetails;
