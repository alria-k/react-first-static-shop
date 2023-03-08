import React from "react";

export class Logo extends React.Component {
  render() {
    return (
      <div className="header-logo__box">
        <img className="logo-img" src="/img/logo.svg" alt="" />
        <h1 className="logo-text">agon</h1>
      </div>
    );
  }
}
