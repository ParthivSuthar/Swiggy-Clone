import React, { useEffect, useState } from "react";

function TopRestaurant() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  function handleNext() {
    value >= 124 ? "" : setValue((prev) => prev + 31);
  }

  function handlePrev() {
    value <= 0 ? "" : setValue((prev) => prev - 30);
  }

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

      setData(
        result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-14">
      <div className="flex justify-between mt-5">
        <h1 className="font-bold text-2xl">Top Restaurants Chains in Delhi</h1>
        <div className="flex gap-3">
          <div
            onClick={handlePrev}
            className={
              ` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +
              (value <= 0 ? "bg-gray-100" : "bg-gray-200")
            }
          >
            <i
              className={
                `fi text-2xl mt-1 fi-rr-arrow-small-left ` +
                (value <= 0 ? "text-gray-300" : "text-gray-800")
              }
            ></i>
          </div>
          <div
            onClick={handleNext}
            className={
              ` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +
              (value >= 124 ? "bg-gray-100" : "bg-gray-200")
            }
          >
            <i
              className={
                `fi text-2xl mt-1 fi-rr-arrow-small-right ` +
                (value >= 124 ? "text-gray-300" : "text-gray-800")
              }
            ></i>
          </div>
        </div>
      </div>
      <div className={`flex mt-2 gap-3`}>
        {data.map((restaurant) => (
          <div className="min-w-[295px] h-[182px]" key={restaurant?.info?.id}>
            <img
              className="w-full h-full  rounded-2xl object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_376,h_376/${restaurant?.info?.cloudinaryImageId}`}
            />
          </div>
        ))}
      </div>
      <hr className="border" />
    </div>
  );
}

export default TopRestaurant;
