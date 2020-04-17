/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./leospa.scss";

import Logo from "./images/logo.png";
import Facebook from "./images/iconfacebook.png";
import Twitter from "./images/icontwitter.png";
import GooglePlus from "./images/icongoogleplus.png";
import Instagram from "./images/iconinstagram.png";
import Aboutbutterfly from "./images/about-butterfly.png";
import Aboutlist1 from "./images/about-list1.jpg";
import Aboutlist2 from "./images/about-list2.jpg";
import Aboutlist3 from "./images/about-list3.jpg";
import Aboutlist4 from "./images/about-list4.jpg";
import BodyTreatment from "./images/body-treatment.png";
import Popularlist1 from "./images/popularlist1.jpg";
import Popularlist2 from "./images/popularlist2.jpg";
import Popularlist3 from "./images/popularlist3.jpg";
import Aboutflower1 from "./images/about-flower1.png";
import Aboutflower2 from "./images/about-flower2.png";
import Quote from "./images/quote.png";
import Client from "./images/client-1.png";
import Teamleader1 from "./images/team-leader1.jpg";
import Teamleader2 from "./images/team-leader2.jpg";
import Teamleader3 from "./images/team-leader3.jpg";
import Appointment from "./images/appointment.jpg";
import Blog1 from "./images/blog1.jpg";
import Blog2 from "./images/blog2.jpg";
import Blog3 from "./images/blog3.jpg";

import Spa from "./images/spa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRight,
  faPlay,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

export default function Leospa() {
  return (
    <div className="leospa">
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <div className="header__top">
              <a className="header__logo">
                <img src={Logo} alt="" />
              </a>
              <i className="fas fa-bars menu__collapse">
                <FontAwesomeIcon icon={faBars} />
              </i>
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      Home
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      About
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      Feature
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      Images
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__content">
              <span className="header__content-slogan">
                Spa & Beauty Center
              </span>
              <h1 className="header__content-title">
                Beauty and success starts here.
              </h1>
              <p className="header__content-desc">
                Together creeping heaven upon third dominion be upon won't
                darkness rule behold it created good saw after she'd Our set
                living.
              </p>
              <div className="header__content-cta">
                <a href="#" className="btn btn--primary btn--icon">
                  Reverse now
                  <i className="fa fa-arrow-right">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </a>
                <a href="" className="btn__play-video">
                  <i className="fa fa-play">
                    <FontAwesomeIcon icon={faPlay} />
                  </i>
                  <span>Watch our story</span>
                </a>
              </div>
            </div>
            <img src={Spa} alt="" className="header__image" />
          </div>
        </header>
        <section className="about">
          <div className="about__inner container">
            <img src={Aboutflower1} alt="" className="about__flower1" />
            <img src={Aboutflower2} alt="" className="about__flower2" />
            <div className="about__content">
              <img src={Aboutbutterfly} alt="" />
              <h3>About our spa center</h3>
              <div className="heading">
                <h2 className="heading__title">
                  Come and you will be Inspired
                </h2>
                <p className="heading__desc">
                  It’s the end of summer the sweltering heat makes human sweat
                  in the night and makes the plants and trees wilt even in the
                  moonlit nights. The eastern wind breeze brings an eerie
                  feeling, that the monsoon clouds are soon coming, there is a
                  strange silence in the ears, the sky gets darker and darker.
                </p>
              </div>
              <a href="#" className="btn btn--primary btn--rounded">
                Read more
              </a>
            </div>
          </div>
          <ul className="about__list">
            <li className="about__item">
              <img src={Aboutlist1} alt="" />
              <div className="about__item-content">
                <img src={BodyTreatment} alt="" />
                <span>Body treatment</span>
              </div>
            </li>
            <li className="about__item">
              <img src={Aboutlist2} alt="" />
              <div className="about__item-content">
                <img src={BodyTreatment} alt="" />
                <span>Body treatment</span>
              </div>
            </li>
            <li className="about__item">
              <img src={Aboutlist3} alt="" />
              <div className="about__item-content">
                <img src={BodyTreatment} alt="" />
                <span>Body treatment</span>
              </div>
            </li>
            <li className="about__item">
              <img src={Aboutlist4} alt="" />
              <div className="about__item-content">
                <img src={BodyTreatment} alt="" />
                <span>Body treatment</span>
              </div>
            </li>
          </ul>
        </section>
        <section className="popular">
          <div className="container">
            <div className="heading">
              <h2 className="heading__title">Popular Procedures</h2>
              <p className="heading__desc">
                To doesn't his appear replenish together called he of mad place
                won't wherein blessed second every wherein were meat kind
                wherein and martcin
              </p>
            </div>
            <ul className="popular__list">
              <li className="popular__item">
                <a href="#" className="popular__link">
                  <img src={Popularlist1} alt="" />
                  <h3 className="title">Massage Therapy</h3>
                  <p className="desc">
                    Living winged said you darkness you're divide gathered and
                    bring one seasons face great dr Waters firmament place
                    which.
                  </p>
                  <button className="btn btn--secondary btn--rounded">
                    Learn more
                  </button>
                </a>
              </li>
              <li className="popular__item">
                <a href="#" className="popular__link">
                  <img src={Popularlist2} alt="" />
                  <h3 className="title">Massage Therapy</h3>
                  <p className="desc">
                    Living winged said you darkness you're divide gathered and
                    bring one seasons face great dr Waters firmament place
                    which.
                  </p>
                  <button className="btn btn--secondary btn--rounded">
                    Learn more
                  </button>
                </a>
              </li>
              <li className="popular__item">
                <a href="#" className="popular__link">
                  <img src={Popularlist3} alt="" />
                  <h3 className="title">Massage Therapy</h3>
                  <p className="desc">
                    Living winged said you darkness you're divide gathered and
                    bring one seasons face great dr Waters firmament place
                    which.
                  </p>
                  <button className="btn btn--secondary btn--rounded">
                    Learn more
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="quote">
          <div className="container">
            <div className="quote__item">
              <img src={Quote} alt="" />
              <p className="desc">
                First i beast be fruitful open you tree all Won't can't likeness
                and you're have whales creature seed to two grass life blessed
                you meat shall you winged under from their there he That you're
                one called gather make much red wherein set fourth green bearing
                fifth replenish given she had.
              </p>
              <img src={Client} alt="" className="author" />
              <p className="author-name">
                Jack Marsh, <span>Executive</span>
              </p>
            </div>
            <ul className="quote__nav">
              <li />
              <li className="active" />
              <li />
              <li />
            </ul>
          </div>
        </section>
        <section className="team">
          <div className="container">
            <div className="heading">
              <h2 className="heading__title">Experienced Team</h2>
              <p className="heading__desc">
                To doesn't his appear replenish together called he of mad place
                won't wherein blessed second every wherein were meat kind
                wherein and martcin
              </p>
            </div>
            <ul className="team__list">
              <li className="team__item">
                <img src={Teamleader1} alt="" className="team__image" />
                <div className="team__info">
                  <h3 className="team__name">Joseph Austin</h3>
                  <span className="team__job">Thai Message</span>
                  <ul className="team__social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook">
                          <img src={Facebook} alt="" />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter">
                          <img src={Twitter} alt="" />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus">
                          <img src={GooglePlus} alt="" />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram">
                          <img src={Instagram} alt="" />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="team__item">
                <img src={Teamleader2} alt="" className="team__image" />
                <div className="team__info">
                  <h3 className="team__name">Joseph Austin</h3>
                  <span className="team__job">Thai Message</span>
                  <ul className="team__social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook">
                          <img src={Facebook} alt="" />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter">
                          <img src={Twitter} alt="" />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus">
                          <img src={GooglePlus} alt="" />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram">
                          <img src={Instagram} alt="" />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="team__item">
                <img src={Teamleader3} alt="" className="team__image" />
                <div className="team__info">
                  <h3 className="team__name">Joseph Austin</h3>
                  <span className="team__job">Thai Message</span>
                  <ul className="team__social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook">
                          <img src={Facebook} alt="" />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter">
                          <img src={Twitter} alt="" />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus">
                          <img src={GooglePlus} alt="" />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram">
                          <img src={Instagram} alt="" />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="booking">
          <div className="booking__image">
            <img src={Appointment} alt="" />
          </div>
          <div className="booking__form">
            <form action="#" autoComplete="off">
              <div className="form-group">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <select name="" id="">
                  <option value="value">Value</option>
                </select>
                <input type="phone" placeholder="Phone number" />
              </div>
              <div className="form-group">
                <div className="custom-input">
                  <input type="date" placeholder="Date" />
                  <i className="fa fa-calendar">
                    <FontAwesomeIcon icon={faCalendar} />
                  </i>
                </div>
                <div className="custom-input">
                  <input type="time" placeholder="Time" />
                  <i className="fa fa-clock">
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                </div>
              </div>
              <div className="form-single">
                <input type="text" placeholder="Your notes" />
              </div>
              <button className="btn btn--primary btn--rounded">
                Make an Appointment
              </button>
            </form>
          </div>
        </section>
        <section className="popular blog">
          <div className="container">
            <div className="heading">
              <h2 className="heading__title">Latest from Blog</h2>
              <p className="heading__desc">
                To doesn't his appear replenish together called he of mad place
                won't wherein blessed second every wherein were meat kind
                wherein and martcin
              </p>
            </div>
            <ul className="popular__list">
              <li className="popular__item">
                <a href="#" className="popular__link">
                  <img src={Blog1} alt="" />
                  <p className="category">Relaxation | July 03, 29</p>
                  <h3 className="title">Massage Therapy</h3>
                  <p className="desc">
                    Living winged said you darkness you're divide gathered and
                    bring one seasons face great dr Waters firmament place
                    which.
                  </p>
                  <button className="btn btn--secondary btn--rounded">
                    Learn more
                  </button>
                </a>
              </li>
              <li className="popular__item">
                <a href="#" className="popular__link">
                  <img src={Blog2} alt="" />
                  <p className="category">Relaxation | July 03, 29</p>
                  <h3 className="title">Massage Therapy</h3>
                  <p className="desc">
                    Living winged said you darkness you're divide gathered and
                    bring one seasons face great dr Waters firmament place
                    which.
                  </p>
                  <button className="btn btn--secondary btn--rounded">
                    Learn more
                  </button>
                </a>
              </li>
              <li className="popular__item">
                <a href="#" className="popular__link">
                  <img src={Blog3} alt="" />
                  <p className="category">Relaxation | July 03, 29</p>
                  <h3 className="title">Massage Therapy</h3>
                  <p className="desc">
                    Living winged said you darkness you're divide gathered and
                    bring one seasons face great dr Waters firmament place
                    which.
                  </p>
                  <button className="btn btn--secondary btn--rounded">
                    Learn more
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="contact">
          <div className="container">
            <div className="heading">
              <h2 className="heading__title">Get In Touch</h2>
              <p className="heading__desc">
                To doesn't his appear replenish together called he of mad place
                won't wherein blessed second every wherein were meat kind
                wherein and martcin
              </p>
            </div>
            <div className="contact__content">
              <div className="contact__info">
                <div className="contact__item">
                  <i className="fa fa-map-marker">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </i>
                  <div className="contact__text">
                    848 E 28th ST, BROOKLYN NEW YORK, USa
                  </div>
                </div>
                <div className="contact__item">
                  <i className="fa fa-envelope">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <div className="contact__text">
                    <a href="mailto:example@leospa.com">example@leospa.com</a>
                    <a href="mailto:example@leospa.com">example@leospa.com</a>
                  </div>
                </div>
                <div className="contact__item">
                  <i className="fa fa-phone">
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  <div className="contact__text">
                    <a href="tel:+02 365 2365 3265 (02)">
                      +02 365 2365 3265 (02)
                    </a>
                    <a href="tel:+02 365 2365 3265 (02)">
                      +02 365 2365 3265 (02)
                    </a>
                  </div>
                </div>
              </div>
              <form className="contact__form">
                <input type="text" placeholder="First name" />
                <input type="email" placeholder="Email address" />
                <textarea placeholder="Write comment" />
                <button className="btn btn--rounded btn--primary">
                  Submit now
                </button>
              </form>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <a href="index.html" className="footer__logo">
              <img src={Logo} alt="" />
            </a>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Home
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    About
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Feature
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Images
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <ul className="footer__social">
              <li className="footer__social-item">
                <i className="fab fa-facebook">
                  <img src={Facebook} alt="" />
                </i>
              </li>
              <li className="footer__social-item">
                <i className="fab fa-instagram">
                  <img src={Instagram} alt="" />
                </i>
              </li>
              <li className="footer__social-item">
                <i className="fab fa-twitter">
                  <img src={Twitter} alt="" />
                </i>
              </li>
              <li className="footer__social-item">
                <i className="fab fa-google">
                  <img src={GooglePlus} alt="" />
                </i>
              </li>
            </ul>
            <p className="copyright">
              © COPYRIGHT 2019{" "}
              <a className="themeies" href="http://themeies.com">
                THEMEIES.COM.
              </a>{" "}
              ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
