import React from "react";
import { Image, Popup } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
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

//import SmallIntro from "./images/intro-small.png";

export function renderHeader() {
  return (
    <div className="Header PageContainerScrafts">
      <h1 className="Logo">
        <img src={Logo} alt="Logo Web Craftsman" />
      </h1>
    </div>
  );
}

export function renderIntro() {
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <section className="Intro">
      <div className="ImgIntro">
        <a className="Linkedin" href="https://www.linkedin.com/in/mvtnhan/">
          Linkedin
        </a>
        <a className="Twitter" href="https://www.linkedin.com/in/mvtnhan/">
          Twitter
        </a>
        <div className="AroundFindOutMe" />
        <div className="FindOutMe">
          <Image href="#" className="ImgFindOutMe">
            Find Out <p>More</p>
          </Image>
          <a class="MyWorks" href="#">
            Contact Info
          </a>
          <a class="AboutMe" href="#">
            My Works
          </a>
          <a class="ContactInfo" href="#">
            About Me
          </a>
        </div>
      </div>
      <h2>I'm Marijan, Amsterdam based UX Designer working with Booking.com</h2>
    </section>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */
}

export function renderWorks() {
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <section className="Works">
      <div className="PageContainerScrafts">
        <a href="#" className="Left-top">
          <img src={LestHost} alt="LesHost" />
        </a>

        <a href="#" className="Left-mid">
          <img src={FFVentureCapital} alt="ff VentureCapital" />
        </a>

        <a href="#" className="Left-bot">
          <img src={RavenDB} alt="RavenDB" />
        </a>

        <a href="#" className="Right-top">
          <img src={CloudVPS} alt="CloudVPS" />
        </a>

        <a href="#" className="Right-mid">
          <img src={Host365} alt="Host365" />
        </a>

        <a href="#" className="Right-bot">
          <img src={MedievalWall} alt="MedievalWall" />
        </a>
        <a href="#" className="ImgMoreWorks">
          <em>More</em>Works
        </a>
        <div className="CraftsmanWorks">
          <div className="TextAboutWorks">
            <span className="QuestionOpened">“</span>
            On every project my goal is to create an functional and consistent
            UX which serves its main purpose. I always check if every detail is
            in the right place and implemented according to the latest web
            standards.
            <span className="QuestionClosed">”</span>
          </div>
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
      <div className="PageContainerScrafts">
        <div className="AboutSection">
          <div className="AboutImg">
            <a href="#" className="PhotoMore">
              Craftsman <em>Photo</em>
            </a>
            <img src={About} alt="About" width="427" height="375" />
          </div>
          <article>
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
          <article className="HardAndPlay">
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
          <div className="GreatUX">
            <ul>
              <li className="First">
                Defined
                <p>Purpose</p>
              </li>
              <li className="Second">
                Unique
                <p>Design</p>
              </li>
              <li className="Third">
                Quality
                <p>Code</p>
              </li>

              <strong>Efficient Web Presence</strong>
            </ul>
            <p className="Conclusion">GreatUX</p>
          </div>
        </div>
      </div>
    </div>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */
}

const Sociallist = [
  {
    link: "http://mvtnhan@gmail.com",
    img: "Email",
    content: "mvtnhan@gmail.com"
  },
  {
    link: "https://join.skype.com/invite/c2MTvJakdVJG",
    img: "Skype",
    content: "Skype"
  },
  {
    link: "https://twitter.com/mvtnhan",
    img: "Twitter",
    content: "Twitter"
  },
  {
    link: "https://www.linkedin.com/in/mvtnhan",
    img: "Linkedin",
    content: "Linkedin"
  }
];

export function renderContact() {
  return (
    <section className="Contact">
      <div className="PageContainerScrafts">
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
            <img src={Skills} alt="Skills" width="225" height="75" />
          </div>
        </div>
        <div className="Footer">
          <p>Copyright © 2014 Web Craftsman. Contact Preferred Via:</p>
          <div className="IconFooter">
            {Sociallist.map(social => (
              <>
                {" "}
                {/* eslint-disable-next-line */}
                <a href={social.link} />
                <Popup
                  className="PopupoCraftsman"
                  trigger={<Image className={social.img} />}
                  content={social.content}
                  position="top center"
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Scraftsman() {
  return (
    <div className="Scraftsman">
      {renderHeader()}
      {renderIntro()}
      {renderWorks()}
      {renderAbout()}
      {renderContact()}
    </div>
  );
}
