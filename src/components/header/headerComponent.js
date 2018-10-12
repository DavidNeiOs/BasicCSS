import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./headerComponent.scss";

class HeaderComponent extends Component {
  
  render() {
    return (
      <header className="main-header">
        <div id="main-header__logo">
          <button className="toggle-button" onClick={this.props.showSideBar}>
            <span className="toggle-button__bar" />
            <span className="toggle-button__bar" />
            <span className="toggle-button__bar" />
          </button>
          <Link className="main-header__brand" to="/">
            <img
              src={require("./assets/images/uhost-icon.png")}
              alt="UHost - Your favorite hosting company"
            />
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Link className="main-nav__links" to="/packages">
                Packages
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__links" to="/customers">
                Customers
              </Link>
            </li>
            <li className="main-nav__item main-nav__item--cta">
              <Link
                className="main-nav__links main-nav__links--cta"
                to="/startHosting"
              >
                Start hosting
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
