import { Item } from "../../utils/constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const CarouselItem = () => {
  return (
    <div className="w-[95vw]">
      <p className=" font-bold text-xl w-[95vw]">What's on your Mind?</p>
      <div className="p-4 overflow-x-scroll whitespace-nowrap border-b-2 border-Background2 no-scrollbar">
        {Item.map((item, index) => (
          <div key={index} className="inline-block m-2 ">
            <div className="h-32 w-32  rounded-full bg-Background2">
              <img src={item.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselItem;
