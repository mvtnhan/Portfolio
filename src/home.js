import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <span>Wellcome to my Website</span>
      <br />
      <Link to="/shopify">Shopify</Link>
    </div>
  );
}
