import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <span>Wellcome to my Website</span>
      <Link to="/login">Login</Link>
      <Link to="/shopify">Shopify</Link>
      <Link to="/craftsman">Sraftsman</Link>
      <Link to="/leospa">Leospa</Link>
    </div>
  );
}
