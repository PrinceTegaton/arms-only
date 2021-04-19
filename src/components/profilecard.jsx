import React, { Component } from "react";

export default class ProfileCard extends Component {
  state = {
    fullname: "Prince Tegaton",
    email: "princetegaton@gmail.com",
    mobile: "070522442223",
  };
  render() {
    return (
      <table className="table table-sm">
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>
              <strong>{this.state.fullname}</strong>
            </td>
          </tr>
          <tr>
            <td>Email Address</td>
            <td>
              <strong>{this.state.email}</strong>
            </td>
          </tr>
          <tr>
            <td>Mobile No.</td>
            <td>
              <strong>{this.state.mobile}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
