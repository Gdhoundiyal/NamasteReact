import { useParams } from "react-router-dom";
import { ResData } from "../../utils/constants";
import ItemList from "./ItemList";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const DownClick = () => {
    console.log("downCLicked");
  };

  const itemvalues = ResData.filter((item) => item.id === resId);
  console.log("itemvalues", itemvalues);

  return (
    <div className="flex justify-center pt-10 bg-Background1">
      <div className="w-[38rem] p-5  ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="  font-bold text-lg">{itemvalues[0].name}</h1>
            <p className="font-thin mt-2 text-sm">
              {itemvalues[0].areaName + ", " + itemvalues[0].locality}
            </p>
          </div>
          <div className="h-[4.5rem] w-[4.5rem] border-[0.5px] rounded-md flex flex-col justify-center items-center gap-2">
            <p className="text-[12] border-dashed	border-b pb-2  text-Green">
              ☆ {itemvalues[0].avgRating}
            </p>
            <p className=" text-[10px] ">1k+ Rating</p>
          </div>
        </div>
        <p className="font-thin text-[15px]">
          Additional delivery fee will be apply
        </p>
        <div className="flex justify-center pt-5 ">
          <div className="w-[38rem]  ">
            <div className="">
              <ItemList />
            </div>
          </div>
        </div>

        {/* <ItemInfo data={restaurentData} /> */}
      </div>
    </div>
  );
};

export default RestaurentMenu;
