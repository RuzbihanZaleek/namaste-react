import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const ResCardWithPromotedLabel = PromotedRestaurantCard(RestaurantCard);
  const { loggedUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await res.json();

    setListOfRestaurants(
      data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Ooops :( Looks like you are offline!! Please check your internet
        connection 🛜
      </h1>
    );
  }

  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <ShimmerCards />
  ) : (
    <div className="body">
      <div className="flex p-4 gap-5">
        <div className="flex gap-2">
          <input
            type="text"
            className="border border-solid border-black rounded-md focus:outline-green-600 px-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border px-2 rounded-md border-black bg-green-600 text-white"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="border px-2 rounded-md border-black bg-green-600 text-white"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );

              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <span>User Name: </span>
          <input
            type="text"
            className="border border-solid border-black rounded-md focus:outline-green-600 px-2"
            value={loggedUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <h2>No Results Found</h2>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
              className="custom-link"
            >
              {restaurant.info.avgRating > 4.5 ? (
                <ResCardWithPromotedLabel restaurantData={restaurant} />
              ) : (
                <RestaurantCard restaurantData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
