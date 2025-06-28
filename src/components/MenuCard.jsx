/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DetailMenu from "./DetailMenu";

function MenuCard({ title, itemCards }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleFun() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="mt-7">
      <div className="flex justify-between">
        <h1>
          {title} ({itemCards.length})
        </h1>
        <i
          className={
            "fi  text-xl fi-rr-angle-small-" + (isOpen ? "up" : "down")
          }
          onClick={toggleFun}
        ></i>
      </div>
      {
        isOpen &&
      <DetailMenu itemCards={itemCards} />
      }
    </div>
  );
}

export default MenuCard;
