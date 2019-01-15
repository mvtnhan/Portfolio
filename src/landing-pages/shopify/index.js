import React from "react";
import "./index.scss";
import imglaptop from "./images/imglaptop.png";
import logo from "./images/logo.jpg";
import { ReactComponent as Logoshop } from "./images/logoshopify.svg";
import { ReactComponent as Icon2 } from "./images/svgexport-2.svg";
import { ReactComponent as Icon3 } from "./images/svgexport-3.svg";
import { ReactComponent as Icon4 } from "./images/svgexport-4.svg";

export function renderHeader() {
  return (
    <div className="Header">
      <a href="/shopify">
        <Logoshop className="Logo" />
      </a>
      <h1>Sell online with Shopify</h1>
      <h3>Trusted by over 600,000 businesses worldwide</h3>
      <div className="Box-email">
        <div className="Email">
          <input
            className="enteremail"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="start">Start free trial</button>
        </div>
        <p>
          Try Shopify free for 14 days. No risk, and no credit card required
        </p>
      </div>
      <div className="imglaptop">
        <img src={imglaptop} alt="imglaptop" />
      </div>
    </div>
  );
}
export function renderFeatures() {
  return (
    <div className="Features">
      <div className="boxfeatures">
        <Icon2 className="icon" />
        <h3 className="title">
          Beautiful themes that are responsive and customizable
        </h3>
        <p>
          No design skills needed. You have complete control over the look and
          feel of your website, from its layout, to content and colors.
        </p>
      </div>

      <div className="boxfeatures">
        <Icon3 className="icon" />
        <h3 className="title"> Pricing as low as $9/month</h3>
        <p>
          Whether you sell online, on social media, in store, or out of the
          trunk of your car, Shopify has you covered. Start selling anywhere for
          just $9/month.
        </p>
      </div>

      <div className="boxfeatures">
        <Icon4 className="icon" />
        <h3 className="title">Trusted by over 600,000 businesses worldwide</h3>
        <p>
          Shopify handles everything from marketing and payments, to secure
          checkout and shipping
        </p>
      </div>
    </div>
  );
}
export function renderLogos() {
  return (
    <div className="Logos">
      <img src={logo} alt="imgLogoText" />
    </div>
  );
}
export function renderQuotes() {
  return (
    <div className="Quotes">
      <h3 className="Main">
        "Shopify is better than any other platform we've played with, and we've
        played with them all"
      </h3>
      <p>JONATHON BAYME, CEO OF THEORY11</p>
      <button className="start2">Start free trial</button>
    </div>
  );
}
export function renderFooter() {
  return (
    <div className="Footer">
      <a href="http://localhost:3000/shopify">Terms of Service</a>
      <a href="http://localhost:3000/shopify">Privacy Policy</a>
    </div>
  );
}
export default function Shopify() {
  return (
    <div className="Wrapper">
      {renderHeader()}
      {renderFeatures()}
      {renderLogos()}
      {renderQuotes()}
      {renderFooter()}
    </div>
  );
}
