import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/UserAvatar.png";
import "./nav.scss";
import netflixLogo from "../assets/netlix.png";

const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    // returninam clean up function
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src={netflixLogo}
          alt="logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src={avatar}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
