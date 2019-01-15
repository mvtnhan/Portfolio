import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Shopify from "./landing-pages/shopify/index.js";
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Shopify} />
      </Router>
    );
  }
}

export default App;
