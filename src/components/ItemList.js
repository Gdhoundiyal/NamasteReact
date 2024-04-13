import { useDispatch, useSelector } from "react-redux";
import { img_url } from "../../utils/constants";
import { ResCardData } from "../../utils/constants";
import { addItem, totalPrize } from "../features/cartSlice";
const ItemList = () => {
  const rescards = ResCardData;
  const dispatch = useDispatch();

  const addItems = (e) => {
    // alert("Item added");
    console.log(e);
    dispatch(addItem(e));
    dispatch(totalPrize());
  };

  return (
    <div className=" bg-Background1">
      {rescards.map((item) => {
        return (
          <div className=" h-auto   w-[36rem]  bg-Background2 mt-1   p-2  flex items-center ">
            <div className=" w-[36rem]">
              <div className="p-3 flex items-center justify-between mb-2 relative">
                <div className=" font-bold text-l border-b-border">
                  {item.name}
                </div>
                <div className="h-24 w-24 overflow-hidden  rounded-xl  p-2">
                  <img
                    className="h-full w-full object-cover rounded-xl"
                    src={img_url + item.imageId}
                  />
                </div>
                <button
                  className="absolute top-[6.4rem] right-9 text-m bg-border p-[5px]  bg-Background1  rounded-lg text-black"
                  onClick={() => addItems(item)}>
                  Add+
                </button>
              </div>
              <div className="p-3 text-sm">{item.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
