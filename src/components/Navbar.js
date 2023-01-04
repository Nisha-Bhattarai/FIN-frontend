import React, { useState } from "react";
import logo from "../logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const activeLink = "text-red";
  const normalLink = "";
  return (
    <React.Fragment>
      <section>
        <nav>
          <NavLink to="/">
            <img src={logo} alt="Logo" style={{ width: "60px" }} />
          </NavLink>
          <div id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <NavLink
              className="nav-item"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#f48634" : "#545e6f",
              })}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-item"
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#f48634" : "#545e6f",
              })}
            >
              About
            </NavLink>
            <NavLink
              className="nav-item"
              to="/our-services"
              style={({ isActive }) => ({
                color: isActive ? "#f48634" : "#545e6f",
              })}
            >
              Our Services
            </NavLink>
            <NavLink
              className="nav-item"
              to="/investments"
              style={({ isActive }) => ({
                color: isActive ? "#f48634" : "#545e6f",
              })}
            >
              Our Investments
            </NavLink>
            <NavLink
              className="nav-item"
              to="/team"
              style={({ isActive }) => ({
                color: isActive ? "#f48634" : "#545e6f",
              })}
            >
              Teams
            </NavLink>
            <NavLink
              className="nav-item"
              to="/blogs"
              style={({ isActive }) => ({
                color: isActive ? "#f48634" : "#545e6f",
              })}
            >
              Blogs
            </NavLink>

            <NavLink
              className="nav-item"
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#f48634" : "#545e6f",
              })}
            >
              Contact
            </NavLink>
            <NavLink
              className="nav-item"
              id="signInButtonMobile"
              to="/sign-in"
              style={({ isActive }) => ({
                color: isActive ? "#f48634" : "#fff",
                backgroundColor: isActive ? "#fff" : "#f48634",
              })}
            >
              Sign In
            </NavLink>
          </div>
          <div>
            <NavLink
              className="nav-item"
              id="signInButton"
              to="/sign-in"
              style={({ isActive }) => ({
                color: isActive ? "#f48634" : "#fff",
                backgroundColor: isActive ? "#fff" : "#f48634",
              })}
            >
              Sign In
            </NavLink>
          </div>
          {/* <a href="/">
          <img src={logo} alt="Logo" style={{ width: "60px" }} />
        </a>

        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <a
                href="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a
                href="/about"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                About Us
              </a>
            </li>
            <li className="item">
              <a
                href="/our-services"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Our Services
              </a>
            </li>
            <li className="item">
              <a
                href="/investments"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Our Investments
              </a>
            </li>
            <li className="item">
              <a
                href="/team"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Teams
              </a>
            </li>
            <li className="item">
              <a
                href="/blogs"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Blogs
              </a>
            </li>
            <li className="item">
              <a
                href="/contact"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contact Us
              </a>
            </li>
            <li id="signInButtonMobile" className="item">
              <a
                href="sign-in"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul id="signInButton">
            <li>
              <a href="sign-in">Sign In</a>
            </li>
          </ul>
        </div> */}

          <div id="mobile" onClick={handleClick}>
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
