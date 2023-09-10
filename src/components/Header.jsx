import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/constants.js";

export const Header = () => {
  return (
    <div className="container-fluid wrapper" id="navbar">
      <Link to="/">
        <img src={images.logo} className="img-fluid rounded-top " />
      </Link>
    </div>
  );
};
