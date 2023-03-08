import React from "react";

export class HowItWorks extends React.Component {
  render() {
    return (
      <section className="works__container">
        <div className="works-question">How it Work?</div>
        <h1 className="hero__title">
          Cross-border ordering has never been easier
        </h1>
        <div className="works-overview__box">
          <div className="overview__container overview-orange">
            <div className="overview-img__box">
              <img src="./img/icons/start.svg" alt="start-plan" />
            </div>
            <h3 className="overview__title">Start Plan</h3>
            <p className="overview__descr">Choose any of our packages</p>
            <img
              className="dashed-arrow-img"
              src="./img/icons/dashed-arrow-right.svg"
              alt=""
            />
          </div>
          <div className="overview__container overview-pink">
            <div className="overview-img__box">
              <img src="./img/icons/connect.svg" alt="start-plan" />
            </div>
            <h3 className="overview__title">Connect</h3>
            <p className="overview__descr">Receive concepts In 24 hours</p>
            <img
              className="dashed-arrow-img"
              src="./img/icons/dashed-arrow-right.svg"
              alt=""
            />
          </div>
          <div className="overview__container overview-green">
            <div className="overview-img__box">
              <img src="./img/icons/match.svg" alt="start-plan" />
            </div>
            <h3 className="overview__title">Match</h3>
            <p className="overview__descr">Development Stage</p>
            <img
              className="dashed-arrow-img"
              src="./img/icons/dashed-arrow-curle.svg"
              alt=""
            />
          </div>
          <div className="overview__container overview-green">
            <div className="overview-img__box">
              <img src="./img/icons/complete.svg" alt="start-plan" />
            </div>
            <h3 className="overview__title">Complete</h3>
            <p className="overview__descr">After-release Support</p>
          </div>
          <div className="overview__container overview-navy">
            <div className="overview-img__box">
              <img src="./img/icons/review.svg" alt="start-plan" />
            </div>
            <h3 className="overview__title">Review</h3>
            <p className="overview__descr">Project launch and checkout</p>
            <img
              className="dashed-arrow-img"
              src="./img/icons/dashed-arrow-left.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    );
  }
}
