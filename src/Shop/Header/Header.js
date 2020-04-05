import React from "react";

import { Header, LogoContainer, Logo, Title } from "./Header.style";
import logo from "../../assets/logo.svg";

const ShopHeader = props => {
  return (
    <Header>
      <LogoContainer>
        <Logo src={logo} alt="Buurt Super" />
      </LogoContainer>
      <Title>{props.title}</Title>
    </Header>
  );
};

export default ShopHeader;
