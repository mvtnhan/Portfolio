import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import Login from "./pages/login/index.js";
>>>>>>> ft/login
import Shopify from "./pages/shopify/index.js";
import Craftsman from "./pages/craftsman/index.js";
import Home from "./home.js";

<<<<<<< HEAD
export default function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/shopify/" component={Shopify} />
        <Route path="/craftsman/" component={Craftsman} />
      </div>
    </BrowserRouter>
  );
}
=======
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
>>>>>>> ft/login
