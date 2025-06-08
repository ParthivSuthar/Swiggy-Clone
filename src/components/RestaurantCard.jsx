/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function RestaurantCard(info) {

  // console.log(info?.cta?.link?.split("/").at(-1).replace("rest", "")); ✅
  // console.log(info);
  return (
    <Link to={`/restaurantmenu/${info?.cta?.link?.split("/").at(-1).replace("rest", "")}`}>
      <div className="min-w-[295px] h-[182px] relative" key={info.id}>
        <img
          className="w-full h-full  rounded-2xl object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_376,h_376/${info?.info?.cloudinaryImageId}`}
        />
        <div className="bg-gradient-to-t from-black from-1% to-transparent to-40%  rounded-2xl w-full h-full  absolute top-0"></div>
        <p className="absolute bottom-0 text-white text-2xl ml-2 mb-1 font-bold">
          {info?.info?.aggregatedDiscountInfoV3
            ? info?.info?.aggregatedDiscountInfoV3?.header +
              " " +
              info?.info?.aggregatedDiscountInfoV3?.subHeader
            : ""}
        </p>
      </div>
      <div className="mt-3">
        <h2 className="text-lg font-semibold ">{info?.info?.name}</h2>
        <p className="flex items-center gap-1 text-base font-semibold">
          <i className="fi fi-ss-circle-star text-green-600 text-lg mt-1"></i>
          {info?.info?.avgRating} . <span>{info?.info?.sla?.slaString}</span>
        </p>
        <p className="line-clamp-1 text-black/60 font-medium">
          {info?.info?.cuisines?.join(", ")}
        </p>
        <p className="line-clamp-1 text-black/60 font-medium">
          {info?.info?.locality}
        </p>
      </div>
    </Link>
  );
}

export default RestaurantCard;
