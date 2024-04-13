import React from "react";
import { img_url } from "../../utils/constants";

const Rescards = (props) => {
  const { cards } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } = cards;

  // console.log(cards);
  let items = [];
  if (cuisines.length > 7) {
    items = cuisines.slice(1, 5);
  } else {
    items = cuisines;
  }
  // ka tech  63
  // console.log("items", items);

  return (
    <div className="h-[330px] w-[14rem] border m-5 rounded-xl relative">
      <div className="h-36 w-auto overflow-hidden rounded-xl  p-2">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={img_url + cloudinaryImageId}
        />
      </div>
      <h3 className="h-auto w-48 rounded-l mt-2  p-1 text-l font-bold">
        {name}
      </h3>
      <div className="h-auto w-42 rounded-l mt-1  p-1 flex justify-between ">
        {avgRating}
      </div>
      <div className=" w-auto rounded-l mt-1 px-1">
        {" "}
        {items ? items.join(", ") : cuisines.join(", ")}
        {/* {cuisines.join(", ")} */}
      </div>
    </div>
  );
};

export default Rescards;
