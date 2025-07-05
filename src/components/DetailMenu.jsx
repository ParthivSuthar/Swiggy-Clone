/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DetailMenuCard from "./DetailMenuCard";

function DetailMenu({ itemCards }) {
  let veg =
    "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png";
  let nonVeg =
    "https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png";
  return (
    <div className="my-5">
      {itemCards.map(
        ({card: {info}}, i) => (
          <DetailMenuCard info={info} key={i} />
        )
      )}
    </div>
  );
}

export default DetailMenu;
