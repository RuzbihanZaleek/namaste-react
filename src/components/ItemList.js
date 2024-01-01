import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between p-4 items-center border-t-2"
        >
          <div className="flex flex-col">
            {item?.card?.info?.inStock ? <span>🟩</span> : <span>🟥</span>}
            <span className="font-semibold">{item?.card?.info?.name}</span>
            <span className="text-sm">Rs. {item?.card?.info?.price / 100}</span>
            <span className="text-xs">{item?.card?.info?.description}</span>
          </div>
          <div className="flex justify-center">
            <div className="w-[150px] shadow-md">
              <img
                className="border rounded-lg"
                alt="img"
                src={CDN_URL + item?.card?.info?.imageId}
              />
            </div>
            {/* <div className="absolute flex w-[130px] py-1 items-center bg-white border border-green-600 rounded mt-[90px]">
              <button className="mx-auto font-semibold">ADD</button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
