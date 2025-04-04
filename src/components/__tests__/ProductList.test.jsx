import { screen, render } from "@testing-library/react";
import ProductList from "../ProductList";
import { test } from "vitest";

test(" ", () => {
  render(<ProductList />);
  screen.logTestingPlaygroundURL();
});
