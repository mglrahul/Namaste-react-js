import { useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState(restaurantList);

  const filterData = (searchText) => {
    const filterRestaurant = restaurantList.filter(res => {
      // console.log("fil", res.info.name)
      return res.info.name.includes(searchText)
    });
    // console.log("filterData", filterRestaurant, restaurantList)
    setRestaurant(filterRestaurant)
  }

  return (
    <>
      <div className="search-container">
        <input type="text" name="search" id="" label="search box" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
        <button className="search-btn" onClick={()=> filterData(searchText)}>Search</button>
      </div>
      <div className="restaurant-list">
        {
          restaurant.map(restaurantData => {
            return <RestaurantCard restaurant={restaurantData.info} key={restaurantData.info.id} />
          })
        }
      </div></>
  );
};

export default Body;
