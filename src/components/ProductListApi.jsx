import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";

const ProductList = () => {
  const { loading, products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
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

  return (
    <div>
      {loading && <p>Loading Products....</p>}
      <h1 className="underline">Product List from API</h1>
      <p className="text-red-600 p-2"> * Click on any product to view more</p>

      <table className="border-separate border border-gray-400 m-10">
        <thead>
          <tr>
            <th className="border border-gray-300 p-3">Title</th>
            <th className="border border-gray-300 p-3">Image</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 p-3">
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </td>
              <td className="border border-gray-300 p-3">
                <img src={product.image} width={45} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button disabled={currentPage === 1} onClick={handlePrevPage}>
        Previous
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button disabled={currentPage === totalPages} onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
};

export default ProductList;
