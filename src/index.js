import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";

var body = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = document.getElementById("root");
ReactDom.render(body, root);
