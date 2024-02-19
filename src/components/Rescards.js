import React from "react";
import ReactDOM from "react-dom/client";
import { img_url } from "../../utils/constants";

const Rescards = (props) => {
  const { cards } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } = cards?.info;

  return (
    <div className="card-container">
      <div>
        <img className="card-img" src={img_url + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <div>{avgRating}</div>
      <span className="cuisines"> {cuisines.join(", ")}</span>
    </div>
  );
};

export default Rescards;
