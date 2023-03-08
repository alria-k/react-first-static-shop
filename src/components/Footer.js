import React from "react";
import { Logo } from "./Logo";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__inner-top">
          <Logo />
          <div className="footer-btn__box">
            <a className="footer-btn__link" href="#f">
              Ready to get started?
            </a>
            <button className="footer-btn">
              Create an Account
              <img src="./img/icons/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
        <div className="footer__inner-middle">
          <nav className="footer__nav">
            <ul className="footer__nav-box">
              <li className="footer__nav-item">
                Contact
                <p className="footer__nav-address" href="">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </p>
                <p className="footer__nav-phone" href="">
                  (239) 555-0108
                </p>
                <p className="footer__nav-email" href="">
                  contact@agon.com
                </p>
                <div className="footer__nav-social">
                  <img
                    className="social-img"
                    src="./img/social/facebook.svg"
                    alt="facebook"
                  />
                  <img
                    className="social-img"
                    src="./img/social/inst.svg"
                    alt="inst"
                  />
                  <img
                    className="social-img"
                    src="./img/social/twitter.svg"
                    alt="twitter"
                  />
                  <img
                    className="social-img"
                    src="./img/social/linkedin.svg"
                    alt="linkedin"
                  />
                </div>
              </li>
              <li className="footer__nav-item">
                About Us
                <a className="footer__nav-link" href="#f">
                  About V1
                </a>
                <a className="footer__nav-link" href="#f">
                  About V2
                </a>
                <a className="footer__nav-link" href="#f">
                  About V3
                </a>
                <a className="footer__nav-link" href="#f">
                  Services V1
                </a>
                <a className="footer__nav-link" href="#f">
                  Services V2
                </a>
              </li>
              <li className="footer__nav-item">
                Discover
                <a className="footer__nav-link" href="#f">
                  Our Blog
                </a>
                <a className="footer__nav-link" href="#f">
                  Our Blog V1
                </a>
                <a className="footer__nav-link" href="#f">
                  Our Blog V2
                </a>
                <a className="footer__nav-link" href="#f">
                  Blog Single
                </a>
                <a className="footer__nav-link" href="#f">
                  Page 404
                </a>
              </li>
              <li className="footer__nav-item">
                Support
                <a className="footer__nav-link" href="#f">
                  FAQs
                </a>
                <a className="footer__nav-link" href="#f">
                  FAQ V2
                </a>
                <a className="footer__nav-link" href="#f">
                  Career
                </a>
                <a className="footer__nav-link" href="#f">
                  Career Detail
                </a>
                <a className="footer__nav-link" href="#f">
                  Contact Us
                </a>
              </li>
              <li className="footer__nav-item">
                Useful links
                <a className="footer__nav-link" href="#f">
                  Shop
                </a>
                <a className="footer__nav-link" href="#f">
                  Shop V2
                </a>
                <a className="footer__nav-link" href="#f">
                  Pricing V1
                </a>
                <a className="footer__nav-link" href="#f">
                  Pricing V2
                </a>
                <a className="footer__nav-link" href="#f">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}
