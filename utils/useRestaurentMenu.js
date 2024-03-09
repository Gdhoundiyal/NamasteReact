import { useState, useEffect } from "react";
import { RES_MENU } from "./constants";

const UseRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(RES_MENU + resId);
    const response = await data.json();
    console.log("response", response);
    setResInfo(response);
  };

  console.log("resMenu", resInfo);
  return resInfo;
};

export default UseRestaurentMenu;
