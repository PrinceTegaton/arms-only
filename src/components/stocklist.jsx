import React, { Component } from "react";

export default class StockList extends Component {
  formatBtn = (id, fn) => {
    let isPresent = this.props.cartItemIds.includes(id);
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
          {this.formatBtn(item.id, () => this.props.onCartChange(item))}
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div className="row">{this.props.data.map((a) => this.card(a))}</div>
    );
  }
}
