import React from "react";
import styled, { css } from "styled-components";

const NoDrag = props => css`
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
`;

const Link = styled.a`
  ${NoDrag}
  text-decoration: none;
  color: inherit;
`;

const Img = styled.img`
  ${NoDrag}
  width: 100%;
`;

const Listitem = ({ product }) => {
  return (
    <Link href={`/detail/${product.product_id}`}>
      <h3>{product.name}</h3>
      <Img src={product.image} alt="" />
      <p className="price">€ {product.price}</p>
    </Link>
  );
};

export default Listitem;
