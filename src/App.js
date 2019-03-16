import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./landing-pages/login/index.js";
import Shopify from "./landing-pages/shopify/index.js";
import Craftsman from "./landing-pages/craftsman/index.js";
import Home from "./home.js";

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login/" component={Login} />
      <Route path="/shopify/" component={Shopify} />
      <Route path="/craftsman/" component={Craftsman} />
    </div>
  </Router>
);

export default App;
