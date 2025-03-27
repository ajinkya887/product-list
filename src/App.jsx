import "./App.css";
import AddProduct from "./components/AddProduct";
import Greeting from "./components/Greeting";
import Items from "./components/Items";
import { ProductContext, ProductProvider } from "./components/ProductContext";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import ProductListApi from "./components/ProductListApi";
import UserCard from "./components/UserCard";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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

      <Items /> */}
      {/* <ProductList /> */}
      {/* <AddProduct /> */}
      <ProductProvider>
        <Router>
          <Routes>
            {/* <Route path="/" element={<ProductList />} /> */}
            <Route path="/" element={<ProductListApi />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </ProductProvider>
    </>
  );
}

export default App;
