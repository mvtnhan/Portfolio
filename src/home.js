import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <span>Wellcome to my Website</span>
      <Link to="/login">Login</Link>
      <Link to="/shopify">Shopify</Link>
      <Link to="/craftsman">Sraftsman</Link>
      <Link to="/leospa">Leospa</Link>
    </div>
  );
}
