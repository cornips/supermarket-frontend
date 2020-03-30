import React, { Component } from "react";
import API from "../API";
import List from "../Product/List/List";

import { ShopContainer, ShopHeader, ShopLogo, ShopBody } from "./Shop.style";
import logo from "../assets/logo.svg";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount = () => {
    API.get("list")
      .then(data => {
        let { products } = data;

        // Fallback to empty array if no products are returned for some reason
        if (!products) products = [];

        this.setState({ products });
      })
      .catch(console.error);
  };

  render() {
    return (
      <ShopContainer>
        <ShopHeader>
          <ShopLogo src={logo} alt="logo" />
          Supermarket
        </ShopHeader>
        <ShopBody>
          <List products={this.state.products} />
        </ShopBody>
      </ShopContainer>
    );
  }
}

export default Shop;
