import React from "react";

import { i18n } from "../../helpers";
import InputField from "../Fields/Input";

import { StyledSearch } from "./Search.style";

const Search = props => {
  return (
    <StyledSearch>
      <InputField
        name="q"
        label={i18n("Search")}
        type="text"
        attributes={{
          value: props.value,
          pattern: `/[a-zA-Z0-9 ]*/i`
        }}
        {...props}
      />
    </StyledSearch>
  );
};

export default Search;
