import React, { useState } from "react";
import { webLogo } from "../../utils/constants";

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
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Contact us</li>
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
