import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  //custom hook
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerCards />;
  const itemCards =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  const { name, cuisines, avgRating, city, totalRatingsString } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex justify-center">
      <div className="flex flex-col mt-5 w-[700px]">
        <h1 className="font-bold text-3xl mx-auto">{name}</h1>
        <div className="flex justify-between items-center">
          <div className="mt-4">
            <p>{cuisines.join(", ")}</p>
            <p className="italic">{city}</p>
          </div>
          <div className="mt-4 p-2 border border-green-700 rounded justify-center items-center font-semibold">
            <h2>{avgRating} ⭐</h2>
            <h2>{totalRatingsString}</h2>
          </div>
        </div>
        {categories.length === 0 ? (
          <h1>No Item Cards</h1>
        ) : (
          <div>
            {categories.map((category, index) => (
              // controlled component
              <RestaurantCategory
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
