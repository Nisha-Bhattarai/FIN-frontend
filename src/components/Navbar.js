import React, { useState } from "react";
import logo from "../logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authActions } from "../store";
axios.defaults.withCredentials = true;
const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [clicked, setClicked] = useState(false);

  const sendLogoutReq = async () => {
    const res = await axios.post("http://localhost:3001/api/logout", null, {
      withCredentials: true,
    });
    if (res.status === 200) {
      return res;
    }
    return new Error("Unable to logout. Please try again");
  };
  const handleLogout = () => {
    sendLogoutReq().then(() => dispatch(authActions.logout()));
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

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
              to="/login"
              style={({ isActive }) => ({
                color: isActive ? "#f48634" : "#fff",
                backgroundColor: isActive ? "#fff" : "#f48634",
              })}
            >
              Login
            </NavLink>
            <NavLink
              className="nav-item"
              id="signInButton"
              to="/signup"
              style={({ isActive }) => ({
                color: isActive ? "#f48634" : "#fff",
                backgroundColor: isActive ? "#fff" : "#f48634",
              })}
            >
              Register
            </NavLink>

            {isLoggedIn && (
              <NavLink
                className="nav-item"
                id="signInButton"
                to="/"
                onClick={handleLogout}
                style={({ isActive }) => ({
                  color: isActive ? "#f48634" : "#fff",
                  backgroundColor: isActive ? "#fff" : "#f48634",
                })}
              >
                Logout
              </NavLink>
            )}
          </div>
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
