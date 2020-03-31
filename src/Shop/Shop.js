import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isLargerScreen } from "../helpers";
import API from "../API";
import List from "../Product/List/List";
import Detail from "../Product/Detail/Detail";

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
      .catch(error => {
        throw new Error(error);
      });
  };

  overview = props => <List {...props} products={this.state.products} />;

  render() {
    return (
      <Router>
        <ShopContainer>
          <ShopHeader>
            <ShopLogo src={logo} alt="logo" />
            Supermarket
          </ShopHeader>
          <ShopBody>
            <Switch>
              <Route
                path="/detail/:productId"
                render={props => {
                  if (!isLargerScreen()) return <Detail {...props} />;
                  else return this.overview(props);
                }}
              />
              <Route render={props => this.overview(props)} />
            </Switch>
          </ShopBody>
        </ShopContainer>
      </Router>
    );
  }
}

export default Shop;
