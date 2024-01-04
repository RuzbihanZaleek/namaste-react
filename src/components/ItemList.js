import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items, addButton = true }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch action
    dispatch(addItem(item));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

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
          <div className="flex flex-col justify-center items-center">
            <div className="w-[150px] shadow-md">
              <img
                className="border rounded-lg"
                alt="img"
                src={CDN_URL + item?.card?.info?.imageId}
              />
            </div>
            <div className="flex w-[130px] py-1 items-center bg-white border border-black hover:border-green-600 rounded mt-2">
              {addButton && (
                <button
                  className="mx-auto font-semibold"
                  onClick={() => handleAddItem(item)}
                >
                  Add ➕
                </button>
              )}
              {!addButton && (
                <button
                  className="mx-auto font-semibold"
                  onClick={() => handleRemoveItem()}
                >
                  Remove ➖
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
