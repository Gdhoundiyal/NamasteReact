import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnloginreact, setbtnloginreact] = useState("Login");

  return (
    <div className="header">
      <div className="logContainer">
        <img className="logo" src={LOGO_URL} alt="An Image of food logo" />
      </div>
      <div className="Nav">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <button
            className="btnlogin"
            onClick={() => {
              btnloginreact === "Login"
                ? setbtnloginreact("Logout")
                : setbtnloginreact("Login");
            }}
          >
            {btnloginreact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
