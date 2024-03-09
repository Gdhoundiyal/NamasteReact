import { useState, useEffect } from "react";
import { RES_DATA } from "./constants";

const useRestaurentData = () => {
  const [restaurentData, setRestaurentData] = useState(null);

  const getData = async () => {
    const resdata = await fetch(RES_DATA);
    const data = await resdata.json();
    // console.log(data);
    setRestaurentData(
      data.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("restaurentData", restaurentData);

  useEffect(() => {
    getData();
  }, []);

  return restaurentData;
};

export default useRestaurentData;
