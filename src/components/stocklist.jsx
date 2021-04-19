import React, { Component } from "react";

export default class StockList extends Component {
  state = {
    data: this.props.data,
    cartItemIds: [],
  };

  addToCart = (item) => {
    if (this.state.cartItemIds.includes(item.id)) {
      // remove
      let index = this.state.cartItemIds.indexOf(item.id);
      if (index > -1) {
        this.state.cartItemIds.splice(index, 1);
      }
    } else {
      // add to cart
      this.state.cartItemIds.push(item.id);
    }

    this.setState({ cartItemIds: this.state.cartItemIds });

    // alert(`${item.name} added to shopping cart..`);
  };

  formatBtn = (id, fn) => {
    let isPresent = this.state.cartItemIds.includes(id);
    return (
      <button
        className={
          "btn btn-sm btn-" + (isPresent ? "outline-danger" : "outline-primary")
        }
        onClick={fn}
      >
        {isPresent ? "Remove" : "Add to Cart"}
      </button>
    );
  };

  card = (item) => (
    <div className="col-md-4" key={item.id}>
      <div className="card mb-4">
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body float-left">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text small">{item.description}</p>
          {this.formatBtn(item.id, () => this.addToCart(item))}
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div className="row">{this.state.data.map((a) => this.card(a))}</div>
    );
  }
}
