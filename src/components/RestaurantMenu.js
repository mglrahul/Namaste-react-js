import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../constant"
import Shimmer from "./Shimmer";
 
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantData, setResData] = useState(null)

  async function loadRestaurantData() {
    let response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4427365&lng=77.0735617&restaurantId=" + resId)
    let restData = await response.json();
    console.log("resData-1", restData, restData.data.cards[2].card.card.info)
    console.log("resData-2", restData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[6].card.card.itemCards)
    setResData(restData)
  }

  useEffect(()=>{
    loadRestaurantData()
  }, [])

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
