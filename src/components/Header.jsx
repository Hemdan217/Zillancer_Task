import React from "react";
import { Link } from "react-router-dom";
import images from "../config/constants.js";

export const Header = () => {
  return (
    <div className=" wrapper" id="navbar">
      <Link to="/">
        <img src={images.logo} className="img-fluid rounded-top " />
      </Link>
    </div>
  );
};
