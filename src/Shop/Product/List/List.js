import React, { useState, useEffect } from "react";

import { i18n } from "../../../helpers";
import Listitem from "../Listitem/Listitem";
import Search from "../../Search/Search";

import { GridContainer, Grid, Message } from "./List.style";

const List = props => {
  const hashValue = unescape(window.location.hash.substr(1));
  const [filter, setFilter] = useState(hashValue);

  useEffect(() => {
    // Set title to parent component
    if (props.handleTitleChange)
      props.handleTitleChange(i18n("Productoverview"));
  });

  // Sanitize value to allow only certain characters
  const sanitizeValue = v => v.match(/[a-zA-Z0-9- ]*/i)[0].trimStart();

  const applySearch = event => {
    const sanitizedValue = sanitizeValue(event.target.value);

    if (filter !== sanitizedValue) {
      setFilter(sanitizedValue);

      // Save filter to hash
      window.location.hash = sanitizedValue;
    }
  };

  // Listen to hash changing
  window.onhashchange = () => setFilter(sanitizeValue(hashValue));

  // Find occurence of characters in string
  const findInString = (compareWith, string) =>
    compareWith.toLowerCase().indexOf(string.toLowerCase()) >= 0;

  const filteredProducts = props.products.filter(
    product =>
      !filter.length ||
      (filter && product.name && findInString(i18n(product.name), filter))
  );

  return (
    <GridContainer>
      <Search value={filter} callback={applySearch} />
      <Grid>
        {filteredProducts.length ? (
          filteredProducts.map(product => (
            <Listitem product={product} key={product.product_id} />
          ))
        ) : (
          <Message>
            {filter
              ? i18n("No products found with '{filter}'", { filter })
              : i18n("No products found")}
          </Message>
        )}
      </Grid>
    </GridContainer>
  );
};

export default List;
