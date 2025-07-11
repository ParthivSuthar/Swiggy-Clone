/* eslint-disable react/prop-types */
import React from "react";

function Discount({
  data: {
    info: { header, couponCode, offerLogo },
  },
}) {
  // console.log(data);
  return (
    <div className="flex gap-2  min-w-[328px] border p-3 h-[76px] rounded-2xl">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${offerLogo}`}
        alt="offerlogo"
      />
      <div>
        <h2 className="font-bold text-xl">{header}</h2>
        <p className="text-gray-500">{couponCode}</p>
      </div>
    </div>
  );
}

export default Discount;
