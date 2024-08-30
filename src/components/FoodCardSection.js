import { IMG_CDN_LINK } from "../constant"; 

const FoodCardSection = (props) => {
//   const { imageId, name, category, description, defaultPrice } = props;
  console.log("FoodCard1:",  props?.card?.info);

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">

      <img
        src={
            IMG_CDN_LINK + props?.card?.info?.imageId
        }
        alt="logo"
      />
      <h2 className="text-large text-xl">{props?.card?.info?.name}</h2>
      <h3>{props?.card?.info?.category}</h3>
      <h4>{props?.card?.info?.description}</h4>
      <h4>Rupees: {props?.card?.info?.defaultPrice/100}</h4>
    </div>
  )
};

export default FoodCardSection;
