import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import Listitem from "./Listitem";

test("Renders a Eurosign", () => {
  const product = {
    product_id: 1,
    name: "Testproduct",
    images: "",
    price: 14.95
  };
  const { getByText } = render(
    <Router>
      <Listitem product={product} />
    </Router>
  );
  const euroSign = getByText(/€/i);
  expect(euroSign).toBeInTheDocument();
});
