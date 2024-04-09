const ExploreRestaurent = () => {
  return (
    <div className="w-[100vw] mt-4">
      <p className=" font-bold text-xl w-full border-indigo-200">
        Restaurants with online food delivery
      </p>
      <div
        className="flex justify-between gap-2 w-[90vw] mt-6
       ">
        <button className="w-full m-4 py-4 border border-Background2 rounded-md">
          Explore Restaurent Near me
        </button>
        <button className="w-full m-4 py-4 border border-Background2 rounded-md">
          Explore Top Rated Restaurent Near me
        </button>
      </div>
    </div>
  );
};
export default ExploreRestaurent;
