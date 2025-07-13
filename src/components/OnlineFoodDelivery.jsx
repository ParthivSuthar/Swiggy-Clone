/* eslint-disable react/prop-types */
import React from "react";
import RestaurantCard from "./RestaurantCard";

function OnlineFoodDelivery({ data, title }) {
  return (
    <div>
      <h1 className="font-bold text-2xl">
        {title}
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {data.map((info) => (
          <div className="hover:scale-95 duration-200" key={info?.id}>
            <RestaurantCard {...info} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineFoodDelivery;
