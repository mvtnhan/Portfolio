import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shopify from "./landing-pages/shopify/index.js";
import Home from "./home.js";

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/shopify/" component={Shopify} />
    </div>
  </Router>
);

export default App;
