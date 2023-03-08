import React from "react";

export class Categories extends React.Component {
  render() {
    return (
      <section className="categories__container">
        <div className="categories-text__box">
          <h1 className="hero__title">Explore by Categories.</h1>
          <p className="hero__text">
            We provide many categories, choose a category according to your
            expertise to make it easier to find a job.
          </p>
        </div>
        <div className="categories__content">
          <div className="categories__popular">
            <h1 className="popular__title">Popular Categories</h1>
            <div className="popular-options__box">
              <div className="popular-options__item">
                <p className="popular-options__descr">Computer - Laaptop</p>
                <p className="popular-options__count">10</p>
              </div>
              <div className="popular-options__item">
                <p className="popular-options__descr">Smart phone & Tablets</p>
                <p className="popular-options__count">12</p>
              </div>
              <div className="popular-options__item">
                <p className="popular-options__descr">Fashion & Accessories</p>
                <p className="popular-options__count">14</p>
              </div>
              <div className="popular-options__item">
                <p className="popular-options__descr">Halth & Beauty</p>
                <p className="popular-options__count">8</p>
              </div>
            </div>
          </div>
          <div className="categories__others">
            <div className="others-options__box">
              <div className="others-img__box">
                <img className="others-img" src="./img/icons/comp.svg" alt="" />
              </div>
              <p className="others-options__text">Computer for Designer, Art</p>
            </div>
            <div className="others-options__box">
              <div className="others-img__box">
                <img className="others-img" src="./img/icons/comp.svg" alt="" />
              </div>
              <p className="others-options__text">Sport, Home, Outdoor</p>
            </div>
            <div className="others-options__box">
              <div className="others-img__box">
                <img
                  className="others-img"
                  src="./img/icons/laptop.svg"
                  alt=""
                />
              </div>
              <p className="others-options__text">
                Laptop for office, students
              </p>
            </div>
            <div className="others-options__box">
              <div className="others-img__box">
                <img
                  className="others-img"
                  src="./img/icons/software.svg"
                  alt=""
                />
              </div>
              <p className="others-options__text">Software, card, book</p>
            </div>
            <div className="others-options__box">
              <div className="others-img__box">
                <img
                  className="others-img"
                  src="./img/icons/explore-more.svg"
                  alt=""
                />
              </div>
              <p className="others-options__text">Explore More</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
