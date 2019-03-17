import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shopify from "./pages/shopify/index.js";
import Craftsman from "./pages/craftsman/index.js";
import Home from "./home.js";

export default function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/shopify/" component={Shopify} />
        <Route path="/craftsman/" component={Craftsman} />
      </div>
    </Router>
  );
}
