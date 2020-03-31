import React, { Component } from "react";
import API from "../../API";
import HomeButton from "../../Shop/HomeButton";

import styled, { css } from "styled-components";

const StyledDetail = styled.div`
  ${props =>
    props.popup
      ? css`
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          overflow: auto;
          &:after {
            content: "";
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.25);
            z-index: 1000;
          }
        `
      : ""}
`;
const Content = styled.div`
  ${props =>
    props.popup
      ? css`
          position: relative;
          left: 0;
          top: 3vh;
          z-index: 1001;
          background: white;
          width: 375px;
          max-width: 84vw;
          margin: 0 auto 3vh;
          padding: 3vh 4vw;
          border-radius: 15px;
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.22);
        `
      : ""}

  img {
    max-width: 100%;
  }
`;

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };
  }

  componentDidMount = () => {
    // Disable scrolling on overview while detail popup is open
    if (this.props.popup) document.body.style.overflow = "hidden";

    API.get(
      `${this.props.match.params.productId || this.props.productId}/detail`
    )
      .then(product => {
        this.setState({ product });
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);

    if (this.props.popup) document.body.style.overflow = "";
  }

  handleClick = event => {
    // Continue normal behaviour when click is inside component
    if (this.node.contains(event.target)) return;

    // TODO: Handle navigation to overview here
    console.log("Click outside popup");
  };

  render() {
    const { product } = this.state;
    return (
      <StyledDetail popup={this.props.popup}>
        <Content popup={this.props.popup} ref={node => (this.node = node)}>
          <HomeButton />
          <p>{product.name}</p>
          <img src={product.image} alt="" />
          <p>€ {product.price}</p>
          <p>{product.description}</p>
        </Content>
      </StyledDetail>
    );
  }
}

export default Detail;
