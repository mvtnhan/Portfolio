import React from "react";
import "./index.css";
import imglaptop from "./images/imgfooterHeader.png";
import { ReactComponent as Logoshop } from "./images/logoshopify.svg";
import { ReactComponent as Icon2 } from "./images/svgexport-2.svg";
import { ReactComponent as Icon3 } from "./images/svgexport-3.svg";
import { ReactComponent as Icon4 } from "./images/svgexport-4.svg";
// import icon2 from "./images/svgexport-2.svg";
// import icon3 from "./images/svgexport-3.svg";
// import icon4 from "./images/svgexport-4.svg";

export function renderHeader() {
  return (
    <div className="Header">
      <a href="/shopify">
        <Logoshop className="Logo" fill="#fffffff" />
      </a>
      <h1>Sell online with Shopify</h1>
      <h2>Trusted by over 600,000 businesses worldwide</h2>
      <div className="Email-textbox-button-text">
        <div className="Email">
          <input
            className="enteremail"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="start">Start free trial</button>
        </div>
        <h6>
          Try Shopify free for 14 days. No risk, and no credit card required
        </h6>
      </div>
      <img src={imglaptop} />
    </div>
  );
}
export function renderFeatures() {
  return (
    <div className="Features">
      <div className="boxfeatures">
        <Icon2 className="icon" />
        <h3> Beautiful themes that are responsive and customizable</h3>
        <p>
          No design skills needed. You have complete control over the look and
          feel of your website, from its layout, to content and colors.
        </p>
      </div>

      <div className="boxfeatures">
        <Icon3 className="icon" />
        <h3> Pricing as low as $9/month</h3>
        <p>
          Whether you sell online, on social media, in store, or out of the
          trunk of your car, Shopify has you covered. Start selling anywhere for
          just $9/month.
        </p>
      </div>

      <div className="boxfeatures">
        <Icon4 className="icon" />
        <h3>Trusted by over 600,000 businesses worldwide</h3>
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
      <a className="logo1" href="#" />
      <a className="logo2" href="#" />
      <a className="logo3" href="#" />
      <a className="logo4" href="#" />
      <a className="logo5" href="#" />
      <a className="logo6" href="#" />
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
      <h5>JONATHON BAYME, CEO OF THEORY11</h5>
      <button className="start2">Start free trial</button>
    </div>
  );
}
export function renderFooter() {
  return (
    <div className="Footer">
      <a href="#">Terms of Service</a>
      <a href="#">Privacy Policy</a>
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
