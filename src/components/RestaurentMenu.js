import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MenuAPIUrl } from "../Utils/constants";

const RestauranMenu = () => {
  const [ResData, setResData] = useState([]);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(MenuAPIUrl + resId);
    const itemdata = await data.json();
    setResData(itemdata);
  };

  if (ResData.length === 0) return <Shimmer />;
  console.log(ResData);
  const { name, cuinsines, areaName, costForToMessage, avgRatingString } =
    ResData.data?.cards[0]?.card?.card?.info;
  console.log(name);

  const { itemCards } =
    ResData.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div>
      <h2>{name}</h2>
      <h3>{cuinsines}</h3>
      <h3>
        {avgRatingString} Rs.{costForToMessage}
      </h3>
      <h3>{areaName}</h3>

      {itemCards.map((res) => (
        <li key={res.card.info.id}>{res.card.info.name}</li>
      ))}
    </div>
  );
};

export default RestauranMenu;
