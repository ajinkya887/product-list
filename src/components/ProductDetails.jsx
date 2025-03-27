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
  console.log("Product: ", product);
  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>{product.catogory}</p>
      <img src={product.image} alt={product.title} width={100} />
      <br />
      <span>
        Rating - {product.rating.rate} ⭐ || Rating - {product.rating.count}
      </span>
    </div>
  );
};

export default ProductDetails;
