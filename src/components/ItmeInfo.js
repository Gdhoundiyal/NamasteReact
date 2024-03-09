import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import ItemList from "./ItemList";

const ItemInfo = ({ data }) => {
  const [hola, sethola] = useState(false);

  const DownClick = () => {
    console.log("downCLicked");
    sethola(true);
  };
  const Items = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log("Items", Items);

  return (
    <div className="flex justify-center pt-5">
      <div className="w-[38rem] ">
        <div className="">
          {Items.map((offer) => {
            return (
              <div key={offer}>
                {offer?.card?.card?.title ? (
                  <div className="p-2 bg-Background flex justify-between items-center rounded-lg mt-5">
                    <div>
                      {offer?.card?.card?.title
                        ? offer?.card?.card?.title
                        : null}
                      {offer?.card?.card?.itemCards
                        ? ` (${offer?.card?.card?.itemCards.length})`
                        : null}
                    </div>
                    <FaAngleDown
                      onClick={() => {
                        DownClick();
                      }}
                    />
                  </div>
                ) : null}
                {offer?.card?.card?.itemCards ? (
                  <ItemList item={offer?.card?.card?.itemCards} />
                ) : null}
              </div>
            );
          })}
        </div>

        {/* <p className="p-2 bg-Background flex justify-between items-center rounded-lg mt-5">
          <p>RecommendedItem {`(${recommendedItem1.length})`}</p>
          <FaAngleDown
            onClick={() => {
              DownClick();
            }}
          />
        </p> */}
      </div>
    </div>
  );
};

export default ItemInfo;
