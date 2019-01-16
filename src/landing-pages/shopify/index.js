import React from "react";
import "./index.scss";
import Imglaptop from "./images/imglaptop.png";
import LogoJpg from "./images/logo.jpg";
import { ReactComponent as Logoshop } from "./images/logoshopify.svg";
import { ReactComponent as SvgFeatureThemes } from "./images/iconthemes.svg";
import { ReactComponent as SvgFeaturePricing } from "./images/iconpricing.svg";
import { ReactComponent as SvgFeatureTrust } from "./images/icontrust.svg";

export function renderHeader() {
  return (
    <div className="Header">
      <a href="/shopify">
        <Logoshop />
      </a>
      <h1>Sell online with Shopify</h1>
      <h3>Trusted by over 600,000 businesses worldwide</h3>
      <div className="BoxEmail">
        <div className="Email">
          <input type="text" placeholder="Enter your email address" />
          <button>Start free trial</button>
        </div>
        <p>
          Try Shopify free for 14 days. No risk, and no credit card required
        </p>
      </div>
      <img src={Imglaptop} alt="imglaptop" />
    </div>
  );
}
export function renderFeatures() {
  return (
    <div className="Features">
      <div className="BoxFeatures">
        <SvgFeatureThemes />
        <h3>Beautiful themes that are responsive and customizable</h3>
        <p>
          No design skills needed. You have complete control over the look and
          feel of your website, from its layout, to content and colors.
        </p>
      </div>

      <div className="BoxFeatures">
        <SvgFeaturePricing />
        <h3> Pricing as low as $9/month</h3>
        <p>
          Whether you sell online, on social media, in store, or out of the
          trunk of your car, Shopify has you covered. Start selling anywhere for
          just $9/month.
        </p>
      </div>

      <div className="BoxFeatures">
        <SvgFeatureTrust />
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
      <img src={LogoJpg} alt="imgLogoText" />
    </div>
  );
}
export function renderQuotes() {
  return (
    <div className="Quotes">
      <h3>
        "Shopify is better than any other platform we've played with, and we've
        played with them all"
      </h3>
      <p>JONATHON BAYME, CEO OF THEORY11</p>
      <button>Start free trial</button>
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
