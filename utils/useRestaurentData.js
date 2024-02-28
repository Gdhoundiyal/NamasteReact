import { useState, useEffect } from "react";
import { RES_DATA } from "./constants";

const useRestaurentData = () => {
  const [restaurentData, setRestaurentData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resdata = await fetch(RES_DATA);
    const data = await resdata.json();
    setRestaurentData(
      data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurentData;
};

export default useRestaurentData;
