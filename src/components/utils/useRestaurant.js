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
    console.log("resData-1", restData, restData.data.cards[2].card.card.info);
    console.log(
      "resData-2",
      restData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[6].card.card
        .itemCards
    );
    setRestaurant(restData);
  }

  return restaurant;
};

export default useRestaurant;