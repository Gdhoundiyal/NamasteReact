import React from "react";

function Shimmer() {
  return (
    <div className="h-72 w-56 border m-5 rounded-xl mt-10">
      <div
        className="h-28 w-52 bg-black rounded-xl m-2"
        style={{ backgroundColor: "#f0f0f0" }}>
        {" "}
      </div>
      <div
        className="h-8 w-48 bg-black rounded-l mt-5 m-2"
        style={{ backgroundColor: "#f0f0f0" }}></div>
      <div
        className="h-8 w-44 bg-black rounded-l mt-5 m-2"
        style={{ backgroundColor: "#f0f0f0" }}></div>
      <div
        className="h-8 w-36 bg-black rounded-l mt-5 m-2"
        style={{ backgroundColor: "#f0f0f0" }}></div>
    </div>
  );
}

export default Shimmer;
