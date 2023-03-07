import React from "react";

export class Features extends React.Component {
  render() {
    return (
      <section className="smart-watch__container">
        <div className="smart-watch__inner">
          <img
            className="smart-watch-img"
            src="./img/Banner-header.png"
            alt="smart-watch"
          />
          <div className="smart-watch__features">
            <div className="features__descr">
              <h3 className="smart-watch__headline">Exclusive Smart Watch</h3>
              <h1 className="hero__title">
                Let go of the Challenge See yourself better
              </h1>
              <p className="hero__text">
                Connect your conversations with the tools and services that you
                use to get the job done. With over 1,500 apps and a robust API
              </p>
            </div>
            <div className="features-btn__box">
              <button className="features-btn">
                Get Started
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-3.36212e-07 7.69164L19.3064 7.69164L12 13L12.7989 14.0452L22 7L12.7989 0L12 0.999998L19.3064 6.30835L-2.75747e-07 6.30835L-3.36212e-07 7.69164Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="features-btn features-btn--white">
                How it works
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-3.36212e-07 7.69164L19.3064 7.69164L12 13L12.7989 14.0452L22 7L12.7989 0L12 0.999998L19.3064 6.30835L-2.75747e-07 6.30835L-3.36212e-07 7.69164Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
            <div className="features-info__box">
              <div className="features-info__inner">
                <img
                  className="info-img"
                  src="./img/icons/projects.svg"
                  alt="projects-done"
                />
                <div className="info__text">
                  <h2 className="info-title">+12k</h2>
                  <p className="info-subtitle">Projects done</p>
                </div>
              </div>
              <div className="features-info__inner">
                <img
                  className="info-img"
                  src="./img/icons/custommers.svg"
                  alt="custommers-total"
                />
                <div className="info__text">
                  <h2 className="info-title">68k</h2>
                  <p className="info-subtitle">Custommers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
