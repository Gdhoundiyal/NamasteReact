import React, { useState } from "react";
import { webLogo } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");

  const Togglebtn = () => {
    if (loginBtn === "Login") {
      setloginBtn("Logout");
    } else {
      setloginBtn("Login");
    }
  };
  return (
    <div className="header">
      <div className="logo-contianer">
        <img className="image" src={webLogo} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"aboutus"}>About us</Link>
          <Link to={"contact"}>Contact us</Link>
          <li>Services</li>
          <li>Cart</li>
          <li
            className="login"
            onClick={() => {
              Togglebtn();
            }}>
            {loginBtn}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
