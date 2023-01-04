import React from "react";
import "./Footer.css";
import logo from "../logo.png";

function Footer() {
  return (
    <div className="footerContainer">
      <div id="mainFooter">
        <div id="column1">
          <div id="logo">
            <img src={logo} alt="Logo" style={{ width: "30px" }} />
            FIN Investments Inc.
          </div>
          <p>
            FIN Investments Inc. is a Toronto-based private equity firm that
            applies a flexible capital approach to middle market investing. As
            patient investors, we, as a team work together to accelerate and
            increase investments into growth initiatives to maximize value for
            the long term.
          </p>
        </div>
        <div id="column2">
          <h1>Navigation</h1>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/our-services">Our Services</a>
            </li>
            <li>
              <a href="/investments">Our Investments</a>
            </li>
            <li>
              <a href="/team">Teams</a>
            </li>
          </ul>
        </div>
        <div id="column3">
          <h1>Contact Us</h1>
          <div className="contact">
            <div className="phone">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:647-774-6542">647-774-6542</a>
            </div>
            <div className="address">
              <i className="fa-solid fa-location-dot"></i>
              <p>
                2900 Eglinton Avenue East, Unit #203, Scarborough, ON M1J 2E4
              </p>
            </div>
          </div>
          <div className="sm_icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div id="divider"></div>
      <div id="copyright">
        <p>© Copyright 2023 FIN Investments Inc. All rights reserved. </p>
      </div>
    </div>
  );
}

export default Footer;
