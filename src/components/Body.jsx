import React, { useEffect, useState } from "react";
import OnYourMind from "./OnYourMind";
import TopRestaurant from "./TopRestaurant";
import OnlineFoodDelivery from "./OnlineFoodDelivery";

function Body() {
  const [topRestaurantdata, setTopRestaurantdata] = useState([])
  const [onYourMindData, setOnYourMindData] = useState([])

  async function fetchData() {
      try {
        const response = await fetch(
          "/api/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
        );
        const result = await response.json();
        console.log(
          result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
  
        setTopRestaurantdata(
          result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setOnYourMindData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className="w-full">
      <div className="w-[75%] mx-auto mt-3 overflow-hidden ">
        <OnYourMind data={onYourMindData} />
        <TopRestaurant data={topRestaurantdata} />
        <OnlineFoodDelivery data={topRestaurantdata} />
      </div>
    </div>
  );
}

export default Body;
