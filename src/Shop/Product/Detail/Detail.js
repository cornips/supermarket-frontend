import React, { Component } from "react";

import API from "../../../API";
import CartButton from "../../Button/CartButton";
import OverviewButton from "../../Button/OverviewButton";

import {
  StyledDetail,
  Content,
  GridBox,
  ActionsTop,
  GridLeft,
  GridRight,
  ActionsBottom,
  ProductImage,
  ProductDescription,
  ProductPrice
} from "./Detail.style";

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    // Disable scrolling on overview while detail popup is open
    if (this.props.popup) document.body.style.overflow = "hidden";

    document.addEventListener("mousedown", this.handleClick, false);

    API.get(
      `${this.props.match.params.productId || this.props.productId}/detail`
    )
      .then(product => {
        // Set name to parent component
        if (this.props.handleTitleChange)
          this.props.handleTitleChange(product.name);

        this.setState({ product });
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);

    if (this.props.popup) document.body.style.overflow = "";
  }

  handleClick = event => {
    // Continue normal behaviour when click is inside component
    if (this.node.contains(event.target)) return;

    // Navigate to overview when clicked outside
    this.props.history.push("/");
  };

  render() {
    const { popup } = this.props;
    const { product } = this.state;

    const inlineName = popup ? <h2>{product.name}</h2> : "";

    return (
      <StyledDetail popup={popup}>
        <Content popup={popup} ref={node => (this.node = node)}>
          <GridBox>
            <ActionsTop>
              <OverviewButton />
            </ActionsTop>

            <GridLeft vertical-align="center">
              <ProductImage>
                <img src={product.image} alt="" />
              </ProductImage>
            </GridLeft>

            <GridRight>
              {inlineName}
              <ProductDescription>{product.description}</ProductDescription>
            </GridRight>

            <ActionsBottom>
              <ProductPrice>€ {product.price}</ProductPrice>
              <CartButton />
            </ActionsBottom>
          </GridBox>
        </Content>
      </StyledDetail>
    );
  }
}

export default Detail;
