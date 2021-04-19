import React, { Component } from "react";

export default class StockFilter extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header">Search</div>
        <div className="card-body">
          <div className="form-group">
            <input
              className="form-control form-control-sm"
              placeholder="Item name"
            />
          </div>
          <div className="form-group">
            <select id="category" className="form-control form-control-sm">
              <option>Change category</option>
              <option>Hand guns</option>
              <option>Assault riffles</option>
              <option>Sniper riffles</option>
              <option>Explosives</option>
              <option>Heavy duty</option>
              <option>Knives</option>
              <option>Smart tools</option>
            </select>
          </div>
          <button className="btn btn-primary btn-sm">Filter</button>
        </div>
      </div>
    );
  }
}
