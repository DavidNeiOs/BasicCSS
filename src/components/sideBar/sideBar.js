import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./sideBar.css";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: null,
    }
    this.outsideClick = this.outsideClick.bind(this);
    this.isLink = this.isLink.bind(this);
  }

  componentDidMount() {
    this.setState({ sideBar: document.querySelector('.mobile-nav-container')});
    window.addEventListener('click', this.outsideClick)
  }

  outsideClick (e) {
    if(e.target === this.state.sideBar || this.isLink(e.target)) {
      this.props.showSideBar();
    }
  }

  isLink(e) {
    let linkClicked = false;
    let links = document.querySelectorAll('.mobile-nav__link');
    console.log(links);
    links.forEach(link => {
      if(link === e){
        linkClicked = true;
      }
    })
    return linkClicked;
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.outsideClick)
  }
  render() {
    return (
      <div className="mobile-nav-container">
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
      </div>
    );
  }
}

export default SideBar;