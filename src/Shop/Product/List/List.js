import React, { Component } from "react";
import styled from "styled-components";
import { config, i18n } from "../../../helpers";
import Listitem from "../Listitem/Listitem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 0px;
  margin: 0 2em;

  @media only screen and (min-width: ${config.breakpoints.medium}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: ${config.breakpoints.large}px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

class List extends Component {
  componentDidMount() {
    // Set title to parent component
    if (this.props.handleTitleChange)
      this.props.handleTitleChange(i18n("Productoverview"));
  }

  render() {
    return (
      <div>
        <Grid>
          {this.props.products.map(product => (
            <Listitem product={product} key={product.product_id} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default List;
