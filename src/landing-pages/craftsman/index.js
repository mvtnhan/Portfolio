import React from "react";
import "./scraftsman.scss";
import Logo from "./images/logo.png";
import LestHost from "./images/LetsHost.png";
import FFVentureCapital from "./images/ffVentureCapital.png";
import RavenDB from "./images/RavenDB.png";
import CloudVPS from "./images/CloudVPS.png";
import Host365 from "./images/Host365.png";
import MedievalWall from "./images/MedievalWall.png";
import About from "./images/about.png";
import Skills from "./images/skills.png";

export function renderHeader() {
  return (
    <div className="Header ContainerScrafts">
      <h1 className="Logo">
        <img src={Logo} alt="Logo Web Craftsman" />
      </h1>
    </div>
  );
}

export function renderRightSide() {
  return (
    <nav className="RightSide">
      <p />
    </nav>
  );
}

export function renderIntro() {
  return (
    <section className="Intro">
      <div className="Link">
        <a className="Linkedin" href="https://www.linkedin.com/in/mvtnhan/">
          Linkedin
        </a>
        <a className="Twitter" href="https://www.linkedin.com/in/mvtnhan/">
          Twitter
        </a>
      </div>
      <h2>I'm Marijan, Amsterdam based UX Designer working with Booking.com</h2>
    </section>
  );
}

export function renderWorks() {
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <section className="Works">
      <div className="ContainerScrafts">
        <a
          href="#"
          className="Porfolio Left-f"
          width="160"
          height="160"
          alt="img LetsHost"
        >
          <img src={LestHost} alt="img LesHost" />
        </a>

        <a
          href="#"
          className="Porfolio Left-s"
          width="160"
          height="160"
          alt="img LetsHost"
        >
          <img src={FFVentureCapital} alt="img ff VentureCapital" />
        </a>

        <a
          href="#"
          className="Porfolio Left-t"
          width="160"
          height="160"
          alt="img LetsHost"
        >
          <img src={RavenDB} alt="img RavenDB" />
        </a>

        <a
          href="#"
          className="Porfolio Right-f"
          width="160"
          height="160"
          alt="img LetsHost"
        >
          <img src={CloudVPS} alt="img CloudVPS" />
        </a>

        <a
          href="#"
          className="Porfolio Right-s"
          width="160"
          height="160"
          alt="img LetsHost"
        >
          <img src={Host365} alt="img Host365" />
        </a>

        <a
          href="#"
          className="Porfolio Right-t"
          width="160"
          height="160"
          alt="img LetsHost"
        >
          <img src={MedievalWall} alt="img MedievalWall" />
        </a>
        <div className="CraftsmanWorks">
          <blockquote>
            <span className="QuestionOpened">“</span>
            On every project my goal is to create an functional and consistent
            UX which serves its main purpose. I always check if every detail is
            in the right place and implemented according to the latest web
            standards.
            <span className="QuestionClosed">”</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */
}
export function renderAbout() {
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <div className="About">
      <div className="ContainerScrafts">
        <div className="AboutSection">
          <div className="AboutImg">
            <img src={About} alt="Img About" width="427" height="375" />
          </div>
          <article className="Primary">
            <header>
              <h2>My Greetings & Handshake to You</h2>
              <p>
                Welcome to my little place on the internet. I’m Marijan, Web
                Designer and UX professional working with{" "}
                <a href="#">Booking.com</a> on world's #1 accomodation site.
              </p>
              <p>
                Working within role of Web and UX Designer since 2006. On each
                project I bring a diversified set of skills which have been
                gathered from projects of all sizes, versatile design styles and
                different markets.
              </p>
              <p>
                I’m specialized in web design and development using handwritten
                HTML, CSS and jQuery framework. Love working with WordPress,
                also have considerable experience with other platforms as well.
              </p>
            </header>
          </article>
        </div>
        <div className="AboutSection">
          <article className="Secondary">
            <header>
              <h3>I Work Hard and Play Hard</h3>
            </header>
            <p>
              I consider stable communication and quick response important
              factors of project success. So when working together I think of me
              & my client as one compact team in which everyone will listen to
              each other and try to do their best. I work with "open" design
              approach which means that client & customer (if it's possible) is
              constantly involved in project creation. So if you are ready to
              dig in with me and produce some great stuff which will not only
              look great but also achieve its goals, go get things rolling and{" "}
              <a href="#">Contact me</a>
            </p>
          </article>
          <div className="GreatUX" />
        </div>
      </div>
    </div>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */
}
export function renderContact() {
  return (
    <section className="Contact">
      <div className="ContainerScrafts">
        <div className="ContainerFrom">
          <form className="ContactForm">
            <input type="text" name="Name" id="Name" placeholder="Name" />
            <input type="text" name="E-mail" id="E-mail" placeholder="E-mail" />
            <textarea
              name="Message"
              id="Message"
              rows="9"
              cols="26"
              placeholder="How can I help you?"
            />
          </form>
          <div className="SkillsImg">
            <img src={Skills} alt="Img Skills" width="225" height="75" />
          </div>
        </div>
        <p>Copyright © 2014 Web Craftsman. Contact Preferred Via:</p>
      </div>
    </section>
  );
}
export default function Scraftsman() {
  return (
    <div className="Scraftsman">
      {renderHeader()}
      {renderRightSide()}
      {renderIntro()}
      {renderWorks()}
      {renderAbout()}
      {renderContact()}
    </div>
  );
}
