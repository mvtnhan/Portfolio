import React from "react";
import "./index.scss";

import Logo from "./images/logo.png";
import LetsHost from "./images/LetsHost.png";
import FFVenture from "./images/ffVentureCapital.png";
import RavenDB from "./images/RavenDB.png";
import CloudVPS from "./images/CloudVPS.png";
import Host365 from "./images/Host365.png";
import MedievalWall from "./images/MedievalWall.png";
import About from "./images/about.png";

export function renderHeader() {
  return (
    <div className="Header" id="page-contaiber">
      <h1 className="Logo">
        <img src={Logo} width="542" height="78" alt="Web Craftsman" />
      </h1>
    </div>
  );
}
export function renderRightSide() {
  return <div className="RightSide" />;
}
export function renderIntro() {
  return (
    <div className="Intro">
      <div className="Link">
        <a href="#" target="_blank" className="linkedin" />
        <a href="#" target="_blank" className="twitter" />
      </div>

      <h2>I'm Marijan, Amsterdam based UX Designer working with Booking.com</h2>
    </div>
  );
}
export function renderWorks() {
  return (
    <div className="Works">
      <div className="Works-container">
        <a href="#" className="porfolio-link-big left-f">
          <img src={LetsHost} width="160" height="160" alt="LetsHost" />
        </a>

        <a href="#" className="porfolio-link-big left-s">
          <img src={FFVenture} width="160" height="160" alt="FF Venture" />
        </a>

        <a href="#" className="porfolio-link-big left-t">
          <img src={RavenDB} width="160" height="160" alt="RavenDB" />
        </a>

        <a href="#" className="porfolio-link-big right-f">
          <img src={CloudVPS} width="160" height="160" alt="CloudVPS" />
        </a>

        <a href="#" className="porfolio-link-big right-s">
          <img src={Host365} width="160" height="160" alt="Host365" />
        </a>

        <a href="#" className="porfolio-link-big right-t">
          <img src={MedievalWall} width="160" height="160" alt="MedievalWall" />
        </a>
        <div className="CraftsmanWorks">
          <blockquote>
            <span className="QuestionOpened">“</span>On every project my goal is
            to create an functional and consistent UX which serves its main
            purpose. I always check if every detail is in the right place and
            implemented according to the latest web standards.
            <span className="QuestionClosed">”</span>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
export function renderAbout() {
  return (
    <div className="About">
      <div className="About-container">
        <div className="About-Image">
          <img src={About} width="427" height="375" alt="About" />
        </div>
        <article className="Primary">
          <header>
            <h2>My Greetings & Handshake to You</h2>
          </header>
          <p>
            Welcome to my little place on the internet. I’m Marijan, Web
            Designer and UX professional working with
            <a href="#" target="_blank">
              Booking.com
            </a>
          </p>
          <p>
            Working within role of Web and UX Designer since 2006. On each
            project I bring a diversified set of skills which have been gathered
            from projects of all sizes, versatile design styles and different
            markets.
          </p>
        </article>
      </div>
    </div>
  );
}
export function renderContact() {
  return <div className="Contact" />;
}

export default function Craftsman() {
  return (
    <div className="Craftsman">
      {renderHeader()}
      {renderRightSide()}
      {renderIntro()}
      {renderWorks()}
      {renderAbout()}
      {renderContact()}
    </div>
  );
}
