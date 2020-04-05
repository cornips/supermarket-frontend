import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { isLargerScreen } from "../../../helpers";
import Detail from "../Detail/Detail";

import { StyledLink, ImgContainer, Img } from "./Listitem.style";

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
