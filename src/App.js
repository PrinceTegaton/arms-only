import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/navbar";
import ProfileCard from "./components/profilecard";
import StockList from "./components/stocklist";
import StockFilter from "./components/stockfilter";

export default class App extends Component {
  state = {
    cartQty: 3,
  };

  render() {
    let stocks = [
      {
        id: 1,
        name: "Glock 8'mm",
        description: "Cute hand gun for military and personal usage",
        category: "hand gun",
        qty: 6,
        image: "../../assets/imgs/tablet-pic.jpg",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Colt Revolver '12mm",
        description: "Powerful 8 round revolver for the power shooters",
        category: "hand gun",
        qty: 6,
        image: "../../assets/imgs/tablet-pic.jpg",
        rating: 4.5,
      },
      {
        id: 3,
        name: "AK-48 Riffle",
        category: "assault riffle",
        description: "Cute hand gun for military and personal usage",
        qty: 6,
        image: "../../assets/imgs/tablet-pic.jpg",
        rating: 4.5,
      },
      {
        id: 4,
        name: "Colt Revolver '12mm",
        description: "Powerful 8 round revolver for the power shooters",
        category: "hand gun",
        qty: 6,
        image: "../../assets/imgs/tablet-pic.jpg",
        rating: 4.5,
      },
      {
        id: 5,
        name: "Glock 8'mm",
        description: "Cute hand gun for military and personal usage",
        category: "hand gun",
        qty: 6,
        image: "../../assets/imgs/tablet-pic.jpg",
        rating: 4.5,
      },
      {
        id: 6,
        name: "Colt Revolver '12mm",
        description: "Powerful 8 round revolver for the power shooters",
        category: "hand gun",
        qty: 6,
        image: "../../assets/imgs/tablet-pic.jpg",
        rating: 4.5,
      },
    ];

    return (
      <React.Fragment>
        <NavBar cartQty={this.state.cartQty} />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <StockFilter />
            </div>
            <div className="col-md-9">
              <StockList data={stocks} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
