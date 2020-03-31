import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { isLargerScreen } from "../../helpers";
import Detail from "../Detail/Detail";

import styled, { css } from "styled-components";

const NoDrag = props => css`
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
`;

const StyledLink = styled.a`
  ${NoDrag}
  text-decoration: none;
  color: inherit;
`;

const ImgContainer = styled.div`
  ${NoDrag}
  height: 80px;
`;

const Img = styled.img`
  ${NoDrag}
  height: 100%;
`;

const Listitem = ({ product }) => {
  // Prevent empty or undefined product
  if (!product) return null;

  return (
    <div>
      <StyledLink as={Link} to={`/detail/${product.product_id}`}>
        <h3>{product.name}</h3>
        <ImgContainer>
          <Img src={product.image} alt="" />
        </ImgContainer>
        <p className="price">€ {product.price}</p>
      </StyledLink>
      <Switch>
        <Route
          path={`/detail/${product.product_id}`}
          render={props => {
            if (isLargerScreen())
              return (
                <Detail
                  {...props}
                  productId={product.product_id}
                  popup={true}
                />
              );
          }}
        />
      </Switch>
    </div>
  );
};

export default Listitem;
