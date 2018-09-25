import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./sideBar.css";

class SideBar extends Component {
  render() {
    return (
      <nav className="mobile-nav">
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
            <Link to="/packages" className="mobile-nav__link">Packages</Link>
          </li>
          <li className="mobile-nav__item">
            <Link to="/customers" className="mobile-nav__link">Customers</Link>
          </li>
          <li className="mobile-nav__item mobile-nav__item--cta">
            <Link to="/startHosting" className="mobile-nav__link mobile-nav__cta">Start Hosting</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideBar;