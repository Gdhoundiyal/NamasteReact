import Rescards from "./Rescards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useStatus from "../../utils/useStatus";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { ResData } from "../../utils/constants";
import CarouselItem from "./Carousel";
import ExploreRestaurent from "./ExpolreRes";
import BestCuisines from "./bestCuisines";
import Footer from "./footer";

const Body = () => {
  const [cards, setcards] = useState(null);
  const [searchvalue, setsearchvalue] = useState([]);
  const [inputText, setinputText] = useState("");
  const [noData, setnoData] = useState(false);

  const getData = () => {
    setTimeout(() => {
      setcards(ResData);
      console.log("interval");
    }, 1000);
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
    <div className=" bg-Background1 p-5">
      <div className=" bg-Background1 p-3">
        <CarouselItem />
        <div className=" mt-4  ">
          <p className=" font-bold text-xl w-full border-indigo-200">
            Restaurants with online food delivery
          </p>

          <div className="p-5 flex gap-2 justify-between ">
            <div className="flex  gap-3">
              <div className="  flex text-catogary h-10 text-[0.8rem] px-2 border border-Background2 rounded-full text-center">
                <button
                  className=" text-Primary"
                  onClick={() => {
                    let filterData = cards.filter((res) => res.avgRating > 4);
                    setcards(filterData);
                    console.log("clicked", filterData);
                  }}>
                  Top Rated Restaurents{" "}
                </button>
              </div>
              <div className="flex text-catogary h-10 text-[0.8rem] px-2 border border-Background2 rounded-full text-center">
                <button className="">Sort By</button>
              </div>
              <div className="flex text-catogary h-10 text-[0.8rem] px-2 border border-Background2 rounded-full text-center">
                <button className="">Fast Delivery</button>
              </div>
              <div className="flex text-catogary h-10 text-[0.8rem] px-2 border border-Background2 rounded-full text-center">
                <button className="">Pure Veg</button>
              </div>
              <div className="flex text-catogary h-10 text-[0.8rem] px-2 border border-Background2 rounded-full text-center">
                <button className="">Offers</button>
              </div>
              <div className="flex text-catogary h-10 text-[0.8rem] px-2 border border-Background2 rounded-full text-center">
                <button className="">Rs 300-600</button>
              </div>
              <div className="flex text-catogary h-10 text-[0.8rem] px-2 border border-Background2 rounded-full text-center">
                <button className="">Less Than 300</button>
              </div>
            </div>
            <div className="flex h-10 text-[0.8rem] px-2 border border-Background2 rounded-lg  text-center">
              <input
                className=" border-Background2 placeholder:text-primary text-catogary focus:outline-none "
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
            </div>
          </div>
        </div>
        <div className="flex flex-wrap m-5 mt-0">
          {noData ? (
            <div className="  font-bold  text-xl ml-3">
              No Match Found for {`"${searchvalue}"`}
            </div>
          ) : (
            cards.map((rescard) => (
              <Link to={`/restaurent/${rescard.id}`} key={rescard.id}>
                <Rescards cards={rescard} key={rescard.id} />
              </Link>
            ))
          )}
          <BestCuisines />
          <ExploreRestaurent />
        </div>
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
