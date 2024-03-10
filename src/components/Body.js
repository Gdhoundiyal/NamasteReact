import Rescards from "./Rescards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useStatus from "../../utils/useStatus";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { ResData } from "../../utils/constants";

const Body = () => {
  const [cards, setcards] = useState(null);
  const [searchvalue, setsearchvalue] = useState([]);
  const [inputText, setinputText] = useState("");
  const [noData, setnoData] = useState(false);

  const getData = () => {
    setcards(ResData);
  };

  const SearchItem = () => {
    const filtervalue = cards.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchvalue.toLowerCase())
    );

    if (!searchvalue == filtervalue) {
      setnoData(true);
    } else {
      setnoData(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const status = useStatus();
  if (status === false) {
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
            // setresData(filterData);
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
        {noData ? (
          <div className="  font-bold  text-xl ml-3">
            No Match Found for {`"${searchvalue}"`}
          </div>
        ) : (
          ResData.map((rescard) => (
            <Link to={`/restaurent/${rescard.id}`} key={rescard?.id}>
              <Rescards cards={rescard} key={rescard?.id} />
            </Link>
          ))
        )}
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
