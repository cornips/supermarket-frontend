import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { i18n, isLargerScreen } from "../helpers";
import API from "../API";
import Header from "./Header/Header";
import List from "./Product/List/List";
import Detail from "./Product/Detail/Detail";

import { Container, Content } from "./Shop.style";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: i18n("Productoverview"),
      products: [],
      filter: ""
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

  setFilter = filter => {
    if (this.state.filter !== filter) this.setState({ filter });
  };

  handleTitleChange = title => {
    if (this.state.title !== title) this.setState({ title });
  };

  overview = props => (
    <List
      {...props}
      products={this.state.products}
      filterCallback={this.setFilter}
      filter={this.state.filter}
      handleTitleChange={this.handleTitleChange}
    />
  );

  render() {
    const { handleTitleChange } = this;

    return (
      <Router>
        <Container>
          <Header title={this.state.title} />
          <Content>
            <Switch>
              <Route
                path="/detail/:productId"
                render={props => {
                  if (!isLargerScreen())
                    return (
                      <Detail
                        handleTitleChange={handleTitleChange}
                        {...props}
                      />
                    );
                  else return this.overview(props);
                }}
              />
              <Route
                render={props =>
                  this.overview({
                    handleTitleChange: handleTitleChange,
                    ...props
                  })
                }
              />
            </Switch>
          </Content>
        </Container>
      </Router>
    );
  }
}

export default Shop;
