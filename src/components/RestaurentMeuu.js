import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UseRestaurentMenu from "../../utils/useRestaurentMenu";
import ItemInfo from "./ItmeInfo";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurentData = UseRestaurentMenu(resId);
  console.log("restaurentData", restaurentData);

  if (!restaurentData) {
    return <Shimmer />;
  }
  const { name, avgRating, areaName, city } =
    restaurentData.data.cards[2].card.card.info;

  const offers =
    restaurentData?.data?.cards[3]?.card.card.gridElements?.infoWithStyle
      ?.offers;
  console.log(offers);

  return (
    <div className="flex justify-center pt-10">
      <div className="w-[38rem] p-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="  font-bold text-lg">{name}</h1>
            <p className="font-thin mt-2 text-sm">{areaName + ", " + city}</p>
          </div>
          <div className="h-[4.5rem] w-[4.5rem] border-[0.5px] rounded-md flex flex-col justify-center items-center gap-2">
            <p className="text-[12] border-dashed	border-b pb-2  text-Green">
              ☆ {avgRating}
            </p>
            <p className=" text-[10px] ">1k+ Rating</p>
          </div>
        </div>
        <p className="font-thin text-[15px]">
          Additional delivery fee will be apply
        </p>
        <ItemInfo data={restaurentData} />

        {/* {cuisines.map((name) => (
          <p>{name}</p>
        ))} */}
      </div>
    </div>
  );
};

export default RestaurentMenu;
