import React from "react";

const ProductList = () => {
  const productItems = [
    { id: 1, name: "Notebook", stock: 2 },
    { id: 2, name: "Book", stock: 5 },
    { id: 3, name: "Pen", stock: 3 },
    { id: 1, name: "Notebook", stock: 0 },
  ];

  const inStock = productItems.filter((item) => item.stock > 0);
  const outOfStock = productItems.filter((item) => item.stock === 0);
  return (
    <div>
      <h1>Product List</h1>
      <h2>In Stock</h2>
      <ul>
        {inStock.map((item) => (
          <li key={item.id}>
            {item.name} / {item.stock}
          </li>
        ))}
      </ul>
      <h2>Out of Stock</h2>
      <ul>
        {outOfStock.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
