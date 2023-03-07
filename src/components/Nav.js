import React from "react";

export class Nav extends React.Component {
  render() {
    return (
      <nav className="nav__box">
        <div className="header-logo__box">
          <img className="logo-img" src="/img/logo.svg" alt="" />
          <h1 className="logo-text">agon</h1>
        </div>
        <ul className="nav-menu__container">
          <li className="nav-menu__item">
            <a className="nav-menu__link" href="#f">
              Home
            </a>
          </li>
          <li className="nav-menu__item">
            <a className="nav-menu__link" href="#f">
              About
            </a>
          </li>
          <li className="nav-menu__item">
            <a className="nav-menu__link" href="#f">
              Compay
            </a>
          </li>
          <li className="nav-menu__item">
            <a className="nav-menu__link" href="#f">
              Pages
            </a>
          </li>
          <li className="nav-menu__item">
            <a className="nav-menu__link" href="#f">
              Blog
            </a>
          </li>
          <li className="nav-menu__item">
            <a className="nav-menu__link" href="#f">
              Shop
            </a>
          </li>
        </ul>
        <button className="btn__repeat">Get Started</button>
      </nav>
    );
  }
}
