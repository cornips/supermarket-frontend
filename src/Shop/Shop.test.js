import React from "react";
import { render } from "@testing-library/react";

import { i18n } from "../helpers";
import Shop from "./Shop";

test("Has overview title", () => {
  const { getByText } = render(<Shop />);
  const title = getByText(i18n("Productoverview"));
  expect(title).toBeInTheDocument();
});
