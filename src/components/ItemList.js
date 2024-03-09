const ItemList = ({ item }) => {
  console.log(item);
  return (
    <div>
      {/* hello */}
      {item.map((item) => {
        return (
          <div className=" h-36 hw-auto bg-white flex  justify-between">
            <div>
              <div>{item?.card?.info?.name}</div>
              <div>{item?.card?.info?.description}</div>
            </div>
            <div>{`Rs.${item?.card?.info?.defaultPrice / 100}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
