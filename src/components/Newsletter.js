import React from "react";
import { Newsletterform } from "./NewsletterForm";

export class Newsletter extends React.Component {
  render() {
    return (
      <section className="newsletter__container">
        <div className="newsletter__inner">
          <h1 className="hero__title">Subscribe our newsletter</h1>
          <p className="hero__text">
            By clicking the button, you are agreeing with our Term & Conditions
          </p>
          <Newsletterform />
        </div>
        <img
          className="newsletter-img"
          src="./img/Banner-newsletter.png"
          alt="Banner-newsletter"
        />
      </section>
    );
  }
}
