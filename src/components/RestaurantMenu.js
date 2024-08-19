import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../constant"
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestaurant";
 
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantData = useRestaurant(resId);

  const restaurantDetails = restaurantData?.data?.cards[2]?.card?.card?.info;
  const restaurantMenu = restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card?.itemCards;
  return !restaurantData ? <Shimmer /> : (
    <div className="menu">
        <div>
            <h1>Restaurant Id: {resId}</h1>
            <h2>{restaurantDetails?.name}</h2>
            <img src={IMG_CDN_LINK + restaurantDetails?.cloudinaryImageId} alt="" />
            <h3>{restaurantDetails?.city}</h3>
            <h3>{restaurantDetails?.avgRating}</h3>
            <h3>{restaurantDetails?.costForTwoMessage}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>
                {restaurantMenu?.map(item => {
                    return <li key={item.card.info.id}>{item.card.info.name}</li>
                })}
            </ul>
        </div>
    </div>
  );
};

export default RestaurantMenu;
