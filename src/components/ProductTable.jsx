import React from "react";
import { Link } from "react-router-dom";

const ProductTable = ({ products, deleteProduct, navigate }) => {
  return (
    <table className="border-separate border border-gray-400 m-10 w-full text-left bg-white shadow-lg ">
      <thead className="bg-purple-500 text-white">
        <tr>
          <th className="border border-gray-300 p-3">Title</th>
          <th className="border border-gray-300 p-3">Image</th>
          <th className="border border-gray-300 p-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
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
                className="w-12 h-15 object-contain rounded-md shadow-md"
                src={product.image}
                width={45}
              />
            </td>
            <td className="border border-gray-300 p-3 flex-1/2 justify-center items-center">
              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-600 hover:bg-red-700 text-red-400 font-bold rounded-lg shadow-md transition transform hover:scale-105 m-2"
              >
                Delete
              </button>
              <button
                onClick={() => navigate(`/update-product/${product.id}`)}
                className="bg-blue-600 hover:bg-blue-700 text-blue-400 font-bold rounded-lg shadow-md transition transform hover:scale-105 "
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
