import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="mt-3">
      <div className="border rounded p-4 shadow-lg cursor-pointer bg-slate-100">
        {/* Header */}
        <div
          className="flex justify-between"
          onClick={() => {
            handleClick();
          }}
        >
          <span className="font-semibold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
