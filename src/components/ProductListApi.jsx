import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../components/ProductContext";
import ProductTable from "./ProductTable";

const ProductList = () => {
  const navigate = useNavigate();
  const { loading } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const deleteProduct = (productID) => {
    fetch(`https://fakestoreapi.com/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => alert("Product deleted successfully"));
  };

  return (
    <div>
      {loading && <p>Loading Products....</p>}
      <h1 className="underline">Product List from API</h1>
      <div className=" py-3 justify-end mb-6">
        <button
          onClick={() => navigate("/add-product")}
          className="bg-blue-600 hover:bg-blue-700 text-blue-400 font-bold rounded-lg shadow-md transition transform hover:scale-105"
        >
          Add New Product
        </button>
      </div>
      <p className="text-red-600 p-2"> * Click on any product to view more</p>
      <ProductTable
        products={paginatedProducts}
        deleteProduct={deleteProduct}
        navigate={navigate}
      />
      <button
        className="px-4 mx-3"
        disabled={currentPage === 1}
        onClick={handlePrevPage}
      >
        Previous
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button
        className="mx-3"
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default ProductList;
