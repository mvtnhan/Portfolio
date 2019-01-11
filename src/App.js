import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/shopify" component={() => "Shopilify"} />
      </Router>
    );
  }
}

export default App;
