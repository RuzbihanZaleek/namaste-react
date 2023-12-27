import { useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_API + resId);

    const data = await res.json();

    setResInfo(data);
  };

  if (resInfo === null) return <ShimmerCards />;

  const itemCards =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  const { name, cuisines, avgRating, cloudinaryImageId } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h2>{avgRating} ⭐</h2>
      <div className="res-logo-info-container">
        <img
          className="res-info-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      {itemCards.length === 0 ? (
        <h1>No Item Cards</h1>
      ) : (
        <ul>
          {itemCards.map((itemCard) => (
            <li key={itemCard.card?.info?.id}>
              {itemCard.card?.info?.name} -{" Rs."}
              {Math.round(itemCard.card?.info?.price / 100) || Math.round(itemCard.card?.info?.defaultPrice / 100)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
