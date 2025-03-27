// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const ProductListApi = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedProducts = products.slice(startIndex, endIndex);
//   console.log("paginatedProducts: ", paginatedProducts);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Data: ", data);
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [currentPage]);

//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };
//   return (
//     <div>
//       {loading && <p>Loading Products....</p>}
//       <h1>Product list from API </h1>
//       <p>Total items: {products.length}</p>
//       {/* {paginatedProducts.length > 0 ? (
//         <ul>
//           {paginatedProducts.map((product) => (
//             <li key={product.id}>
//               {product.title} - {product.price} - {product.category} -
//               <img src={product.image} width={50} height={50}></img>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No items found</p>
//       )} */}

//       <table border="1">
//         <thead>
//           <tr>
//             <th>Title</th>
//             {/* <th>Price</th>
//             <th>Category</th>
//             <th>Image</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedProducts.map((product) => (
//             <tr key={product.id}>
//               {/* <td>{product.title}</td>
//               <td>{product.price}</td>
//               <td>{product.category}</td>
//               <td>
//                 <img src={product.image} width={50} height={50}></img>
//               </td> */}
//               <td>
//                 <Link to={`/product/${product.id}`}>{product.title}</Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button disabled={currentPage === 1} onClick={handlePrevPage}>
//         Previous
//       </button>
//       <span>
//         {currentPage} of {totalPages}
//       </span>
//       <button onClick={handleNextPage}>Next</button>
//     </div>
//   );
// };

// export default ProductListApi;

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
      <h1>Product List from API</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
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
