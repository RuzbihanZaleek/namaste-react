import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = restaurantData?.info;
  const { slaString } = restaurantData?.info?.sla;

  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3>{name}</h3>
      <div className="res-cuisine">
        <span>{cuisines.join(", ")}</span>
      </div>
      <div className="rate-eta">
        <div className="rate">
          <span>{avgRating} ⭐</span>
        </div>
        <div className="eta">
          <span>{slaString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
