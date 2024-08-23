import { IMG_CDN_LINK } from "../constant";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = props.restaurant;

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img
        src={
            IMG_CDN_LINK + cloudinaryImageId
        }
        alt="logo"
      />
      <h2 className="text-large text-xl">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
