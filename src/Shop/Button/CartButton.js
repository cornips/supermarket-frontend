import React from "react";
import styled from "styled-components";

import { i18n } from "../../helpers";
import Button from "./Button";

import cart from "./assets/cart.svg";

const StyledCartButton = styled.button``;

const CartButton = () => {
  return (
    <StyledCartButton as={Button} color="primary" icon={cart}>
      {i18n("In cart")}
    </StyledCartButton>
  );
};

export default CartButton;
