import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";

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

  return (
    <div>
      {loading && <p>Loading Products....</p>}
      <h1 className="underline">Product List from API</h1>
      <div className=" py-3 justify-end mb-6">
        <button
          onClick={() => navigate("/add-product")}
          className="bg-blue-600 hover:bg-blue-700 text-blue-400 font-bold rounded-lg shadow-md transition transform hover:scale-105"
        >
          Add Your Story
        </button>
      </div>
      <p className="text-red-600 p-2"> * Click on any product to view more</p>
      {/* <div className="productListDiv">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="p-8 m-1 border-2 rounded-md border-gray-200 bg-gray-200"
          >
            <Link to={`/product/${prod.id}`}>{prod.title}</Link>
          </div>
        ))}
      </div> */}

      <table className="border-separate border border-gray-400 m-10 w-full text-left bg-white shadow-lg ">
        <thead className="bg-purple-500 text-white">
          <tr>
            <th className="border border-gray-300 p-3">Title</th>
            <th className="border border-gray-300 p-3">Image</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product) => (
            <tr
              key={product.id}
              className={product.id % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="border border-gray-300 p-3 hover:bg-purple-100 transition-all">
                <Link
                  to={`/product/${product.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {product.title}
                </Link>
              </td>
              <td className="border border-gray-300 p-3 flex justify-center items-center">
                <img
                  className="w-12 h-12 object-contain rounded-md shadow-md"
                  src={product.image}
                  width={45}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
