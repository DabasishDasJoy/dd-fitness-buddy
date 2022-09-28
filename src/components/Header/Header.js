import React from "react";
import logo from "../../images/logo.svg";
const Header = () => {
  return (
    <div className="navbar lg:px-20">
      <a className="text-3xl font-bold text-blue-500" href="./home">
        <img src={logo} alt="" className="w-10" /> D&D Fitness Buddy
      </a>
    </div>
  );
};

export default Header;
