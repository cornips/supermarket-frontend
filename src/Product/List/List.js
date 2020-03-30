import React from "react";
import styled from "styled-components";
import { config, i18n } from "../../helpers";
import Listitem from "../Listitem/Listitem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media only screen and (min-width: ${config.breakpoints.medium}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: ${config.breakpoints.large}px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const List = ({ products }) => {
  return (
    <div>
      <h1>{i18n("Productoverzicht")}</h1>
      <Grid>
        {products.map(product => (
          <Listitem product={product} key={product.product_id} />
        ))}
      </Grid>
    </div>
  );
};

export default List;
