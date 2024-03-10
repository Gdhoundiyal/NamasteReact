import { img_url } from "../../utils/constants";
import { ResCardData } from "../../utils/constants";

const ItemList = () => {
  const rescards = ResCardData;

  return (
    <div>
      {rescards.map((item) => {
        return (
          <div className=" h-36   w-[36rem]  bg-Background   p-3  flex items-center">
            <div className=" w-[36rem]">
              <div className="p-4 flex items-center justify-between mb-2">
                <div className=" font-bold text-l border-b-border">
                  {item.name}
                </div>
                <img src={img_url + item.imageId} />
              </div>
              <div>{item.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
