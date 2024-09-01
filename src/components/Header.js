import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const [item, setItem] = useState(null);
  const cartItem = useSelector((state) => state.items);

  useEffect(() => {
    setItem(cartItem.length); 
  }, [cartItem]);

  return (
    <div className="flex mx-auto justify-between items-center h-auto px-20  w-[100vw] ">
      <div className="logo-contianer">
        <img
          className="w-34 h-20"
          src={require("../../public/logoDark.png")}
          alt="an image of food "
        />      
      </div>
      <div className=" content-center">
        <ul className=" flex gap-8 ">
          <Link className="font-rubik text-[1rem] font-[400] " to={"/"}>
            Home
          </Link>
          <Link className="font-rubik text-[1rem] font-[400]" to={"offers"}>
            Offers
          </Link>
          <Link className="font-rubik text-[1rem] font-[400]" to={"Help"}>
            Help
          </Link>
          <Link
            className="font-rubik text-[1rem] font-[400]"
            to={"restaurents"}>
            Restaurents
          </Link>
        </ul>
      </div>
      <div className="flex justify-between gap-3">
        <Link
          className="font-rubik text-[1rem] font-[400] flex items-center gap-2   "
          to={"cart"}>
          <FaCartShopping />
          <div className=" ">
            <div className="flex justify-between ">
              <p>Cart</p>
              <p className="px-1 ">{item ? item : 0}</p>
            </div>
          </div>
        </Link>
        <Link to={"signup"}>
          <button className="   px-2 py-1 rounded-md ">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
