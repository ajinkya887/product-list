import "./App.css";
import AddProduct from "./components/AddProduct";
import ErrorBoundary from "./components/ErrorBoundary";
import { ProductContext, ProductProvider } from "./components/ProductContext";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import ProductListApi from "./components/ProductListApi";
import UserCard from "./components/UserCard";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  const users = [
    { name: "Ajinkya", role: "Frontend Developer" },
    { name: "Annirudha", role: "Full Stack Developer" },
    { name: "vishal", role: "Backend Developer" },
  ];
  return (
    <>
      {/* <Greeting name={"Ajinkya"} />
      <h2>User List</h2>
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} role={user.role} />
      ))}
      {/* <ProductList /> */}
      <ProductProvider>
        <ErrorBoundary>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <ProductListApi />
                  </Suspense>
                }
              />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/update-product/:id" element={<UpdateProduct />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </ProductProvider>
    </>
  );
}

export default App;
