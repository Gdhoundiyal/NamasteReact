import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UseRestaurentMenu from "../../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurentData = UseRestaurentMenu(resId);

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
    </div>
  );
};

export default RestaurentMenu;
