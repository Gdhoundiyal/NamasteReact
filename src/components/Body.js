import Rescards from "./Rescards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurentData from "../../utils/useRestaurentData";
import useStatus from "../../utils/useStatus";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import RestaurentMenu from "./RestaurentMeuu";
import ItemInfo from "./ItmeInfo";

const Body = () => {
  const [cards, setcards] = useState(null);
  const [searchvalue, setsearchvalue] = useState([]);
  const [inputText, setinputText] = useState("");
  const [resData, setresData] = useState([]);
  const response = useRestaurentData();
  // console.log(response);

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
  console.log("sssssssss", cards);

  const status = useStatus();
  if (status === false) {
    // console.log(status);
    return <h1>Looks like Your Internat is not working Please Check !!</h1>;
  }

  return cards ? (
    <div className="">
      <div className="m-5 flex gap-2 ">
        <button
          className="font-rubik  h-10 text-[0.8rem] px-2 bg-Primary  text-white  rounded-lg "
          onClick={() => {
            console.log("clicked");
            let filterData = cards.filter((res) => res.info.avgRating > 4);
            setcards(filterData);
            setresData(filterData);
          }}>
          Top Rated Restaurents{" "}
        </button>
        <span className="flex border rounded-lg  w-fit">
          <input
            className=" rounded-lg h-10 text-[0.8rem] px-2 "
            placeholder="Search Restaurents"
            value={inputText}
            onChange={(e) => {
              value = e.target.value;
              setsearchvalue(value);
              setinputText(value);
            }}></input>
          <IconContext.Provider
            value={{ className: "w-10 h-10 text-[0.8rem] px-2" }}>
            <IoSearchOutline
              onClick={() => {
                SearchItem();
              }}
            />
          </IconContext.Provider>
        </span>
      </div>
      <div className="flex flex-wrap m-5">
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
  // return <ItemInfo />;
};

export default Body;
