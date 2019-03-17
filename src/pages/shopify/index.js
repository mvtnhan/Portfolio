import React from "react";
import "./index.scss";
import laptop from "./images/laptop.png";
import spapers from "./images/spapers.jpg";
import { ReactComponent as Logoshop } from "./images/logoshopify.svg";
import { ReactComponent as SvgFeatureThemes } from "./images/feature-themes.svg";
import { ReactComponent as SvgFeaturePricing } from "./images/feature-pricing.svg";
import { ReactComponent as SvgFeatureTrust } from "./images/feature-trust.svg";

export function renderHeader() {
  return (
    <div className="Header">
      <a href="/shopify" className="Logo">
        <Logoshop />
      </a>
      <h1 className="MainTitle">Sell online with Shopify</h1>
      <h3 className="SubTitle">Trusted by over 600,000 businesses worldwide</h3>
      <div className="SubscribeEmail">
        <input
          type="text"
          className="InputText"
          placeholder="Enter your email address"
        />
        <button className="Button ButtonSecondary">Start free trial</button>
      </div>
      <p className="TryFree">
        Try Shopify free for 14 days. No risk, and no credit card required
      </p>
      <img className="Laptop" src={laptop} alt="laptop" />
    </div>
  );
}
export function renderFeatures() {
  return (
    <div className="Features Container">
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
export function renderNewspapers() {
  return (
    <div className="Newspapers Container">
      <img src={spapers} alt="new spapers" />
    </div>
  );
}
export function renderQuotes() {
  return (
    <div className="Quotes Container">
      <h3>
        "Shopify is better than any other platform we've played with, and we've
        played with them all"
      </h3>
      <p>JONATHON BAYME, CEO OF THEORY11</p>
      <button className="Button ButtonPrimary">Start free trial</button>
    </div>
  );
}
export function renderFooter() {
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <div className="Footer">
      <a href="#">Terms of Service</a>
      <a href="#">Privacy Policy</a>
    </div>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */
}
export default function Shopify() {
  return (
    <div className="Shopify">
      {renderHeader()}
      {renderFeatures()}
      {renderNewspapers()}
      {renderQuotes()}
      {renderFooter()}
    </div>
  );
}
