import React from "react";
import { render } from "@testing-library/react";

import { i18n } from "../../helpers";
import Search from "./Search";

test("Has label with Search", () => {
  const { getByText } = render(<Search />);
  const label = getByText(i18n("Search"));
  expect(label).toBeInTheDocument();
});
