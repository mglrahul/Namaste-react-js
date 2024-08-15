import { IMG_CDN_LINK } from "../constant";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = props.restaurant;

  return (
    <div className="card">
      <img
        src={
            IMG_CDN_LINK + cloudinaryImageId
        }
        alt="logo"
      />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
