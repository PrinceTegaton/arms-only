import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/navbar";
import ProfileCard from "./components/profilecard";
import StockList from "./components/stocklist";
import StockFilter from "./components/stockfilter";

export default class App extends Component {
  state = {
    cartQty: 0,
    cartItemIds: [],
    stocks: [],
  };

  componentDidMount() {
    this.loadStocks();
  }

  loadStocks = () => {
    let self = this;
    axios
      .get("datastore/stocks.json")
      .then(function (res) {
        self.state.stocks = res.data;
        self.setState({ stocks: self.state.stocks });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  handleCartChange = (item) => {
    if (this.state.cartItemIds.includes(item.id)) {
      // remove
      let index = this.state.cartItemIds.indexOf(item.id);
      if (index > -1) {
        this.state.cartItemIds.splice(index, 1);
        this.state.cartQty--;
      }
    } else {
      // add to cart
      this.state.cartItemIds.push(item.id);
      this.state.cartQty++;
    }

    this.setState({
      cartItemIds: this.state.cartItemIds,
      cartQty: this.state.cartQty,
    });
  };

  onFilter = () => {
    let name = document.getElementById("name").value.toLowerCase();
    let cat = document.getElementById("category").value.toLowerCase();
    this.state.stocks = this.state.stocks.filter((a) =>
      //a.name.length > 0 ? a.name.toLowerCase().includes(name) : a.id > 0
      cat != "change category" ? a.category.toLowerCase() == cat : a.id > 0
    );
    this.setState({ stocks: this.state.stocks });
  };

  clearFilter = () => {
    this.loadStocks();
  };

  render() {
    return (
      <React.Fragment>
        <NavBar cartQty={this.state.cartQty} />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <StockFilter
                onFilter={this.onFilter}
                clearFilter={this.clearFilter}
              />
            </div>
            <div className="col-md-9">
              <StockList
                data={this.state.stocks}
                cartItemIds={this.state.cartItemIds}
                onCartChange={this.handleCartChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
