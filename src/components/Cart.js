import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // subscribe to the correct point to optimize the performance
  const itemList = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4">
      <div className="w-6/12 mx-auto m-4 p-4 flex justify-between border rounded-lg items-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        {itemList.length !== 0 && (
          <button
            className="text-xl text-white font-bold bg-black p-2 border rounded-lg"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        )}
      </div>
      <div className="w-6/12 mx-auto m-4 p-4">
        <ItemList items={itemList} addButton={false} />
        {itemList.length === 0 && (
          <div className="text-xl">No items in the cart 🛒</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
