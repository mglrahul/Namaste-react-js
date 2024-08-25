import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnline from "./utils/useOnline";
import UserContext from "./utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const {user, setUser} = useContext(UserContext)

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

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1 style={{color: 'red'}}>Offline, Please check your internet connection</h1>
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
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          name="search"
          className="focus:bg-gray-200 p-2 m-2"
          id=""
          label="search box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn p-2 m-2 bg-purple-900 hover:bg-gray-900 text-white rounded-md" onClick={() => filterData(searchText)}>
          Search
        </button>
        <input type="text" name="name" value={user.name} onChange={(e)=>{
          setUser({
            ...user,
            name: e.target.value
          })
        }}/>
        <input type="text" name="email" value={user.email} onChange={(e)=>{
          setUser({
            ...user,
            email: e.target.value
          })
        }}/>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.length === 0 ? (
          searchText ? (
            "No Record found, try something else"
          ) : (
            <Shimmer key={1}/>
          )
        ) : (
          filteredRestaurant.map((restaurantData, index) => {
            return (
              <Link to={"/restaurant-menu/" + restaurantData.info.id} key={index}>
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
