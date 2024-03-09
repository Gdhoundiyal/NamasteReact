import React from "react";
import { img_url } from "../../utils/constants";

const Rescards = (props) => {
  const { cards } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } = cards?.info;

  console.log(cards);
  let items = [];
  if (cuisines.length > 7) {
    items = cuisines.slice(1, 5);
  } else {
    items = cuisines;
  }
  // ka tech  63
  // console.log("items", items);

  return (
    <div className="h-auto w-56 border m-5 rounded-xl">
      <div className="h-36 w-56 overflow-hidden bg-black rounded-xl  p-2">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={img_url + cloudinaryImageId}
        />
      </div>
      <h3 className="h-auto w-48 bg-black rounded-l mt-2  p-2 text-l font-bold">
        {name}
      </h3>
      <div className="h-auto w-42 bg-black rounded-l mt-1  p-2">
        {avgRating}
      </div>
      <div className=" w-auto bg-black rounded-l mt-1 p-2">
        {" "}
        {items ? items.join(", ") : cuisines.join(", ")}
        {/* {cuisines.join(", ")} */}
      </div>
    </div>
  );
};

export default Rescards;
