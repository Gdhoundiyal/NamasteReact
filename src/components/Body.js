import React from "react";
import { resList } from "../../utils/Data";
import Rescards from "./Rescards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [cards, setcards] = useState(null);
  const [searchvalue, setsearchvalue] = useState([]);
  const [inputText, setinputText] = useState("");
  const [resData, setresData] = useState([]);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    const resdata =
      response.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setcards(resdata);
    setresData(resdata);
  };

  const SearchItem = () => {
    console.log("cardname", cards, cards[2]?.info?.name);
    const filtervalue = cards.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setresData(filtervalue);
  };

  useEffect(() => {
    getData();
  }, []);

  return cards ? (
    <div style={{ marginTop: "10px" }}>
      <div>
        <button
          onClick={() => {
            let filterData = cards.filter((res) => res.info.avgRating > 4.2);
            setcards(filterData);
          }}>
          Top Rated Restaurents{" "}
        </button>
        <input
          placeholder="Search Restaurents"
          value={inputText}
          onChange={(e) => {
            value = e.target.value;
            setsearchvalue(value);
            setinputText(value);
          }}></input>
        <button
          onClick={() => {
            SearchItem();
          }}>
          search
        </button>
      </div>
      <div className="res-cards">
        {resData.map((rescard) => (
          <Rescards key={rescard?.info?.id} cards={rescard} />
        ))}
      </div>
    </div>
  ) : (
    <div className="res-cards">
      {[...Array(15)].map((index) => (
        <Shimmer key={index} />
      ))}
    </div>
  );
};

export default Body;
