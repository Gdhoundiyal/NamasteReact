import React from "react";
import Rescards from "./Rescards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurentData from "../../utils/useRestaurentData";
import useStatus from "../../utils/useStatus";
import { Link } from "react-router-dom";

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
    // console.log("cardname", cards, cards[2]?.info?.name);
    const filtervalue = cards.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setresData(filtervalue);
  };

  useEffect(() => {
    getData();
  }, [response]);

  const status = useStatus();
  // console.log("sssssssss", status);
  if (status === false) {
    // console.log(status);
    return <h1>Looks like Your Internat is not working Please Check !!</h1>;
  }

  return cards ? (
    <div className="">
      <div className="m-5">
        <input
          className="border rounded-lg "
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
        <button
          onClick={() => {
            console.log("clicked");
            let filterData = cards.filter((res) => res.info.avgRating > 4);
            setcards(filterData);
            setresData(filterData);
          }}>
          Top Rated Restaurents{" "}
        </button>
      </div>
      <div className="flex flex-wrap ">
        {resData.map((rescard) => (
          <Link to={`/restaurent/${rescard.info.id}`} key={rescard?.info?.id}>
            <Rescards cards={rescard} />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-wrap">
      {[...Array(15)].map((index) => (
        <Shimmer key={index} />
      ))}
    </div>
  );
  // return (
  //   <div className="grid  grid-cols-5">
  //     {[...Array(15)].map((index) => (
  //       <Shimmer key={index} />
  //     ))}
  //   </div>
  // );
};

export default Body;
