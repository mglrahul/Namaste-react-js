import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    // fetch method
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const restaurantApiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4427365&lng=77.0735617&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantData = await restaurantApiData.json();

    // console.log("res:", restaurantData, restaurantData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setAllRestaurant(
      restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  const filterData = (searchText) => {
    const filterRestaurant = allRestaurant.filter((res) => {
      return res?.info?.name
        ?.toLowerCase()
        ?.includes(searchText?.toLowerCase());
    });
    setFilteredRestaurant(filterRestaurant);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          name="search"
          id=""
          label="search box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={() => filterData(searchText)}>
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurant.length === 0 ? (
          searchText ? (
            "No Record found, try something else"
          ) : (
            <Shimmer />
          )
        ) : (
          filteredRestaurant.map((restaurantData) => {
            return (
              <Link to={"/restaurant-menu/" + restaurantData.info.id}>
                <RestaurantCard
                  restaurant={restaurantData.info}
                  key={restaurantData.info.id}
                />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
