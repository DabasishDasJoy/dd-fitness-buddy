import React from "react";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className="navbar lg:px-20 fixed z-10 w-full top-0 h-16 bg-[#0B1223]">
      <a className="text-3xl font-bold text-white" href="./home">
        <img src={logo} alt="" className="w-10 mr-2" /> D&D Fitness Buddy
      </a>
    </div>
  );
};

export default Header;
