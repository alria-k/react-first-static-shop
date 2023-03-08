import React from "react";

export function Newsletterform() {
  return (
    <label className="newsletter-form__box">
      <input
        className="newsletter-form__input"
        type="text"
        placeholder="Enter you mail..."
      />
      <button className="newsletter-form__btn" type="button">
        <img src="./img/icons/arrow.svg" alt="" />
      </button>
    </label>
  );
}
