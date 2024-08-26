import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../../constant";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    loadRestaurantData();
  }, []);

  async function loadRestaurantData() {
    let response = await fetch(FETCH_MENU_URL + resId);
    let restData = await response.json();
   
    setRestaurant(restData);
  }

  return restaurant;
};

export default useRestaurant;