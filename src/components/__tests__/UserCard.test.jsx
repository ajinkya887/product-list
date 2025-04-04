import { render, screen } from "@testing-library/react";
import UserCard from "../UserCard";
import { expect } from "vitest";

test("Check for the name", () => {
  render(<UserCard name="Ajinkya" role="developer" />);
  expect(
    screen.getByRole("heading", { name: /name : ajinkya/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /role : developer/i })
  ).toBeInTheDocument();
});
