import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-section text-black py-5">
      <div className="cta-content d-flex justify-content-between align-items-center">
        <div>
          <h2 className="cta-heading mb-0">
            Looking for the Best Deals on Tires?
          </h2>
          <p className="cta-text mb-0">
            Discover our wide range of tires to suit every vehicle and driving
            condition. Experience top-quality products, unbeatable prices, and
            exceptional service at Tyreplex.
          </p>
        </div>
        <a href="#shop" className="btn btn-light btn-lg cta-btn">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
