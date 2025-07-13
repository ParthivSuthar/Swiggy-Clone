import React, { useContext, useEffect, useState } from "react";
import OnYourMind from "./OnYourMind";
import TopRestaurant from "./TopRestaurant";
import OnlineFoodDelivery from "./OnlineFoodDelivery";
import { Coordinates } from "../context/contextApi";

function Body() {
  const [topRestaurantdata, setTopRestaurantdata] = useState([]);
  const [onYourMindData, setOnYourMindData] = useState([]);
  const [topResTitle, setTopResTitle] = useState("");
  const [onlineTitle, setOnlineTitle] = useState("");
  const [data, setData] = useState({});
  const {
    coord: { lat, lng },
  } = useContext(Coordinates);

  // /api/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING

  async function fetchData() {
    try {
      const response = await fetch(
        `/api/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`
      );
      const result = await response.json();
      // console.log(
      //   result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      setTopResTitle(result?.data?.cards[1]?.card?.card?.header?.title);
      setOnlineTitle(result?.data?.cards[2]?.card?.card?.title);
      setTopRestaurantdata(
        result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setData(result?.data);
      setOnYourMindData(
        result?.data?.cards[0]?.card?.card?.imageGridCards?.info
      );
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [lat, lng]);

  if (data.communication) {
    return (
      <div className="flex mt-64 overflow-hidden justify-center items-center flex-col">
        <img
          className="w-72"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png"
          alt=""
        />
        <h1>Location unservicalbe</h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-[75%] mx-auto mt-3 overflow-hidden ">
        <OnYourMind data={onYourMindData} />
        <TopRestaurant data={topRestaurantdata} title={topResTitle} />
        <OnlineFoodDelivery data={topRestaurantdata} title={onlineTitle} />
      </div>
    </div>
  );
}

export default Body;
