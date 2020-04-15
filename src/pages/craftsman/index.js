/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Image, Popup } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./scraftsman.scss";

import Logo from "./images/Logo.png";
import LestHost from "./images/LetsHost.png";
import FFVentureCapital from "./images/FFVentureCapital.png";
import RavenDB from "./images/RavenDB.png";
import CloudVPS from "./images/CloudVPS.png";
import Host365 from "./images/Host365.png";
import MedievalWall from "./images/MedievalWall.png";
import About from "./images/About.png";
import Contact from "./images/Contact.png";
import Skills from "./images/Skills.png";

export const Social = {
  linkedin: "https://www.linkedin.com/in/mvtnhan/",
  twitter: "https://twitter.com/mvtnhan",
  email: "mailto:someone@example.com",
  skype: "https://join.skype.com/invite/c2MTvJakdVJG",
};

export function renderHeader() {
  return (
    <header className="Header Container">
      <h1 className="Logo">
        <img src={Logo} alt="Logo Web Craftsman" />
      </h1>
    </header>
  );
}

export function renderIntro() {
  return (
    <section className="Intro">
      <div className="ImgScraftsman">
        <a className="Linkedin" href={Social.Linkedin}>
          Linkedin
        </a>
        <a className="Twitter" href={Social.twitter}>
          Twitter
        </a>
        <div className="AroundFindOutMore" />
        <div className="FindOutMore">
          <Image href="#" className="ImgFindOutMe">
            Find Out <span>More</span>
          </Image>
          <a class=" MyWorks" href="#">
            My Works
          </a>
          <a class="AboutMe" href="#">
            About Me
          </a>
          <a class="ContactInfo" href="#">
            Contact Info
          </a>
        </div>
      </div>
      <h2>I'm Marijan, Amsterdam based UX Designer working with Booking.com</h2>
    </section>
  );
}

export function renderMoreWorks() {
  return (
    <section className="MoreWorks">
      <div className="Container">
        <a href="#" className="LeftTop">
          <img src={LestHost} alt="LesHost" />
        </a>
        <a href="#" className="LeftMid">
          <img src={FFVentureCapital} alt="ff VentureCapital" />
        </a>
        <a href="#" className="LeftBot">
          <img src={RavenDB} alt="RavenDB" />
        </a>
        <a href="#" className="RightTop">
          <img src={CloudVPS} alt="CloudVPS" />
        </a>
        <a href="#" className="RightMid">
          <img src={Host365} alt="Host365" />
        </a>
        <a href="#" className="RightBot">
          <img src={MedievalWall} alt="MedievalWall" />
        </a>
        <a href="#" className="ImgMoreWorks">
          <em>More</em> Works
        </a>
        <span className="QuestionOpened">“</span>
        <p>
          On every project my goal is to create an functional and consistent UX
          which serves its main purpose. I always check if every detail is in
          the right place and implemented according to the latest web standards.
        </p>
        <span className="QuestionClosed">”</span>
      </div>
    </section>
  );
}
export function renderAbout() {
  return (
    <div className="CraftmansPhoto">
      <div className="Container">
        <div className="AboutSection">
          <Image src={About} alt="About" width="427" height="375" />
          <a href="#" className="PhotoMore">
            Craftsman <em>Photo</em>
          </a>
          <article>
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
              HTML, CSS and jQuery framework. Love working with WordPress, also
              have considerable experience with other platforms as well.
            </p>
          </article>
        </div>
        <div className="AboutSection">
          <article className="HardAndPlay">
            <h3>I Work Hard and Play Hard </h3>
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
          <div className="GreatUX">
            <a href="#">
              Defined<span>Purpose</span>
            </a>
            <a href="#">
              Defined<span>Purpose</span>
            </a>
            <a href="#">
              Defined<span>Purpose</span>
            </a>
            <strong>Efficient Web Presence</strong>
            <p className="Conclusion">GreatUX</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function renderContact() {
  return (
    <section className="Contact ">
      <div className="Container FromContact">
        <form>
          <input type="text" name="Name" id="Name" placeholder="Name" />
          <input type="text" name="Email" id="Email" placeholder="Email" />
          <textarea
            name="Message"
            id="Message"
            rows="9"
            cols="26"
            placeholder="How can I help you?"
          />
        </form>
        <Image
          src={Contact}
          alt="ContactMe"
          className="ContactImg"
          width="470"
          height="400"
        />
        <div className="SkillsImg">
          <Popup
            className="TooltipCraftsman"
            trigger={<Image src={Skills} width="225" height="75" />}
            content="HTML5 Powered with CSS3 / Styling, Device Access, Performance & Integration, and Semantics"
            position="bottom center"
          />
          {/* <img src={Skills} alt="Skills" width="225" height="75" /> */}
        </div>
        <a href="#" className="ImgSendMessage">
          <em>Send</em>Message
        </a>
      </div>
    </section>
  );
}

export function renderFooter() {
  const Sociallist = [
    {
      link: Social.email,
      img: "Email",
      content: "mvtnhan@gmail.com",
    },
    {
      link: Social.skype,
      img: "Skype",
      content: "Skype",
    },
    {
      link: Social.twitter,
      img: "Twitter",
      content: "Twitter",
    },
    {
      link: Social.Linkedin,
      img: "Linkedin",
      content: "Linkedin",
    },
  ];
  return (
    <div className="Footer Container">
      <p>Copyright © 2014 Web Craftsman. Contact Preferred Via:</p>
      <div className="IconFooter">
        {Sociallist.map((social) => (
          <>
            {" "}
            <a href={social.link}>
              <Popup
                className="TooltipCraftsman"
                trigger={<Image className={social.img} />}
                content={social.content}
                position="top center"
              />
            </a>
          </>
        ))}
      </div>
    </div>
  );
}

export default function Scraftsman() {
  return (
    <div className="Scraftsman">
      {renderHeader()}
      {renderIntro()}
      {renderMoreWorks()}
      {renderAbout()}
      {renderContact()}
      {renderFooter()}
    </div>
  );
}
