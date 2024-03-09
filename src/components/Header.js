import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

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
    <div className="flex justify-between items-center h-auto px-6 py-0 border border-solid bg-Secondary shadow-xl">
      <div className="logo-contianer">
        <img
          className="w-36 h-28"
          src={require("../../utils/food_logo.png")}
          alt="an image of food "
        />
      </div>
      <div className="">
        <ul className=" flex gap-8">
          <Link className="font-rubik text-[1.2rem] font-[400]" to={"/"}>
            Home
          </Link>
          <Link className="font-rubik text-[1.2rem] font-[400]" to={"aboutus"}>
            About us
          </Link>
          <Link className="font-rubik text-[1.2rem] font-[400]" to={"services"}>
            Services
          </Link>
          <Link
            className="font-rubik text-[1.2rem] font-[400]"
            to={"testimonial"}>
            Testimonials
          </Link>
          <Link className="font-rubik text-[1.2rem] font-[400]" to={"contact"}>
            Contact us
          </Link>
        </ul>
      </div>
      <div className="flex gap-4 items-center ">
        <div
          className="font-rubik text-[1.2rem] font-[400] "
          onClick={() => {
            Togglebtn();
          }}>
          {loginBtn}
        </div>
        <div className="font-rubik text-[1.2rem] font-[400] bg-Primary  text-white px-5 py-3 rounded-md ">
          Register
        </div>
      </div>
    </div>
  );
};

export default Header;
