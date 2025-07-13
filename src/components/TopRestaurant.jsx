/* eslint-disable react/prop-types */
import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

function TopRestaurant({ data = [], title }) {
  const [value, setValue] = useState(0);

  function handleNext() {
        setValue((prev) => prev + 50);
    }

    function handlePrev() {
        setValue((prev) => prev - 50);
    }

  return (
    <div className="mt-14">
      <div className="flex justify-between mt-5">
        <h1 className="font-bold text-2xl">{title}</h1>
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
      <div style={{ translate: `-${value}%` }} className={`flex mt-2 gap-3 duration-300`}>
        {/* {data.map((info) => (
          <div className="min-w-[295px] h-[182px] relative" key={info?.id}>
            <img
              className="w-full h-full  rounded-2xl object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_376,h_376/${info?.info?.cloudinaryImageId}`}
            />
            <div className="bg-gradient-to-t from-black from-1% to-transparent to-40%  rounded-2xl w-full h-full  absolute top-0"></div>
            <p className="absolute bottom-0 text-white text-2xl ml-2 mb-1 font-bold">
              {info?.aggregatedDiscountInfoV3
                ? info?.aggregatedDiscountInfoV3?.header +
                  " " +
                  info?.aggregatedDiscountInfoV3?.subHeader
                : ""}
            </p>
        
          </div>
        } */}
        {data.map((info) => (
          <div className="hover:scale-95 duration-200" key={info?.id}>
            <RestaurantCard {...info} />
          </div>
        ))}
      </div>
      <hr className="border mt-10" />
    </div>
  );
}

export default TopRestaurant;
