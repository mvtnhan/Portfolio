import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shopify from "./landing-pages/shopify/index.js";
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/shopify" component={Shopify} />
      </Router>
    );
  }
}

export default App;
