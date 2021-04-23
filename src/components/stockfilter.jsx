import React, { Component } from "react";

export default class StockFilter extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Search</div>
        <div className="card-body">
          <div className="form-group">
            <input
              id="name"
              className="form-control form-control-sm"
              placeholder="Item name"
            />
          </div>
          <div className="form-group">
            <select id="category" className="form-control form-control-sm">
              <option>Change category</option>
              <option>Hand gun</option>
              <option>Assault riffle</option>
              <option>Sniper riffle</option>
              <option>Explosive</option>
              <option>Heavy duty</option>
              <option>Knives</option>
              <option>Smart tools</option>
            </select>
          </div>
          <button
            className="btn btn-primary btn-sm"
            onClick={this.props.onFilter}
          >
            Filter
          </button>
          <button
            className="btn btn-outline-danger btn-sm ml-2"
            onClick={this.props.clearFilter}
          >
            Reset filters
          </button>
        </div>
      </div>
    );
  }
}
