import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UseRestaurentMenu from "../../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurentData = UseRestaurentMenu(resId);
  // console.log("restaurentData", restaurentData);

  if (!restaurentData) {
    return <Shimmer />;
  }

  console.log("restaurentData", restaurentData);
  const { name, avgRating, cuisines, areaName, city } =
    restaurentData.data.cards[0].card.card.info;

  const recommendedItem =
    restaurentData?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;
  console.log("recommendedItem", recommendedItem);

  // const offers =
  //   restaurentData?.data?.cards[1]?.card.card.gridElements?.infoWithStyle
  //     ?.offers;
  // console.log(offers);

  return (
    <div className="flex justify-center pt-10">
      <div className="w-[30rem]">
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
        <div className="flex gap-2 flex-row">
          {/* {offers.map((offer) => {
            return <div>{offer.info.header}</div>;
          })} */}
        </div>

        {cuisines.map((name) => (
          <p>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
