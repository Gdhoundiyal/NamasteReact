import React from "react";
import Rescards from "./Rescards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurentData from "../../utils/useRestaurentData";
import useStatus from "../../utils/useStatus";

const Body = () => {
  const [cards, setcards] = useState(null);
  const [searchvalue, setsearchvalue] = useState([]);
  const [inputText, setinputText] = useState("");
  const [resData, setresData] = useState([]);
  const response = useRestaurentData();

  const getData = () => {
    setcards(response);
    setresData(response);
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
  }, [response]);

  const status = useStatus();
  console.log("sssssssss", status);
  if (status === false) {
    console.log(status);
    return <h1>Looks like Your Internat is not working Please Check !!</h1>;
  }

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
          // <Link to={`/restaurent/${rescard.info.id}`} key={rescard?.info?.id}>
          <Rescards cards={rescard} />
          // </Link>
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
