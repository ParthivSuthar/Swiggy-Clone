import React, { useState, useEffect } from "react";

function OnYourMind() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  async function fetchData() {
    try {
      const response = await fetch(
        "/api/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
      );
      const result = await response.json();
      console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);

      setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleNext() {
    value >= 124 ? "" : setValue((prev) => prev + 31);
  }

  function handlePrev() {
    value <= 0 ? "" : setValue((prev) => prev - 30);
  }
  return (
    <div>
      <div className="flex justify-between mt-5">
        <h1 className="font-bold text-2xl">What &apos;s on your mind</h1>
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
      <div
        style={{ translate: `-${value}%` }}
        className={`flex mt-2  duration-300 `}
      >
        {data.map((item) => (
          <img
            key={item.id}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_376,h_376/${item.imageId}`}
            alt=""
            className="w-40 "
          />
        ))}
      </div>
      <hr className="border" />
    </div>
  );
}

export default OnYourMind;
