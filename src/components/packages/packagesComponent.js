import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./packagesComponent.css";

class PackagesComponent extends Component {
  render() {
    return (
      <div className="packages-overview">
        <div className="packages-background" />
        <main className="main-packages">
          <section className="packages-plan" id="plus">
            <Link to="/packages/plus" className="packages-plan__link">
              <h1 className="packages-plan__title">Our PLUS Plan</h1>
              <h2 className="packages-plan__badge">RECOMMENDED</h2>
              <h2 className="packages-plan__feature">
                The most popular choice of our customers.
              </h2>
              <p className="packages-plan__description">
                Benefit from increased storage and faster support to ensure that
                your mission-critical data and applications are always
                available!
              </p>
            </Link>
          </section>
          <section className="packages-plan" id="free">
            <Link to="/packages/free" className="packages-plan__link">
              <h1 className="packages-plan__title">Our FREE Plan</h1>
              <h2 className="packages-plan__feature">
                An extremely solid start into our hosting world.
              </h2>
              <p className="packages-plan__description">
                Get started immediately at zero cost!
              </p>
            </Link>
          </section>
          <div className="clearFix" />
          <section
            className="packages-plan packages-plan__highlighted"
            id="premium"
          >
            <Link to="/packages/premium" className="packages-plan__link">
              <h1 className="packages-plan__title">Our PREMIUM Plan</h1>
              <h2 className="packages-plan__feature">
                All your enterprise needs. Instant support, guaranteed uptime.{" "}
              </h2>
              <p className="packages-plan__description">
                The best solution for small to large enterprises. Because
                hosting shouldn't be in the way!
              </p>
            </Link>
          </section>
        </main>
      </div>
    );
  }
}

export default PackagesComponent;
