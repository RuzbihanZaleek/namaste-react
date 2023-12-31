import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = restaurantData?.info;
  const { slaString } = restaurantData?.info?.sla;

  return (
    <div className="m-4 p-2 w-[330px] h-[400px] hover:border rounded hover:bg-green-50">
      <div className="mb-4">
        <img
          className="w-full h-[230px] border rounded"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold">{name}</h3>
      <div className="text-sm">
        <span>{cuisines.join(", ")}</span>
      </div>
      <div className="flex mt-10 justify-between">
        <div className="border rounded px-2 bg-green-500">
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
