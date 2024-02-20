import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../../utils/constants";

const RestaurentMenu = () => {
  const [restaurentData, setrestaurentData] = useState(null);
  const { resId } = useParams();

  const menuData = async () => {
    const data = await fetch(RES_MENU + resId);
    const response = await data.json();
    console.log("response", response);
    console.log(
      "response",
      response.data?.cards[2]?.card?.card?.info?.areaName
    );
    setrestaurentData(response);
  };
  useEffect(() => {
    menuData();
  }, []);

  if (!restaurentData) {
    return <Shimmer />;
  }
  const { name, avgRating, cuisines, areaName } =
    restaurentData.data.cards[2].card.card.info;

  return (
    <div>
      <h1>{name}</h1>
      <p>{avgRating + " " + areaName}</p>
      {cuisines.map((name) => (
        <p>{name}</p>
      ))}
      <div>KFC</div>
      <div>Cuisines</div>
      <div>TIme</div>
    </div>
  );
};

export default RestaurentMenu;
