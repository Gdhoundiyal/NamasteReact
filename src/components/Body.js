import RestaurantCard from "./RestauranCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useUserStatus from "../Utils/useStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterddata, setfilterddata] = useState();
  const [restaurenlist, setrestaurenlist] = useState();

  // const status = useUserStatus();

  useEffect(() => {
    console.log("redered");
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6438234&lng=77.3726379"
    );
    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  console.log("listOfRestaurants", listOfRestaurants);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <input
        value={filterddata}
        onChange={(e) => {
          if (e.target.value === "") {
            setListOfRestaurants(restaurenlist);
          } else {
          }
          setfilterddata(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const searchitem = listOfRestaurants.filter((res) =>
            res.info.name.toUpperCase().includes(filterddata.toUpperCase())
          );
          console.log(searchitem);
          setListOfRestaurants(searchitem);
        }}
      >
        search
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          const filterdList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.4
          );
          setListOfRestaurants(filterdList);
          // setdummydata(filterdList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res_container">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurent/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
