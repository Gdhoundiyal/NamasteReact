import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res_card">
      <img className="pun_img" src={CDN_URL + resData.info.cloudinaryImageId} />
      <h3>{resData.info.name}</h3>
      <div>
        <div className="cuisine">{resData.info.cuisines.join(" ")}</div>
        <div>{resData.info.avgRating} star</div>
        <div>
          {"\u20B9"}
          {resData.costForTwo / 100} for two
        </div>
        <div>{resData.info.deliveryTime}minutes</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
