import { render, screen, fireEvent } from "@testing-library/react";
import ProductList from "../ProductListApi";
import { ProductContext } from "../ProductContext";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";

test("displays loading message when loading is true", () => {
  render(
    <ProductContext.Provider value={{ loading: true, products: [] }}>
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    </ProductContext.Provider>
  );

  expect(screen.getByText(/Loading Products/i)).toBeInTheDocument();
});

test("renders product titles correctly", () => {
  const mockProducts = [
    { id: 1, title: "Product A", image: "imageA.jpg" },
    { id: 2, title: "Product B", image: "imageB.jpg" },
  ];
  render(
    <ProductContext.Provider value={{ loading: false, products: mockProducts }}>
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    </ProductContext.Provider>
  );
  expect(screen.getByText("Product A")).toBeInTheDocument();
  expect(screen.getByText("Product A")).toBeInTheDocument();
});
