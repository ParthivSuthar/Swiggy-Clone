/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DetailMenu from "./DetailMenu";

function MenuCard({ card }) {
  let hello = false;
  const [isOpen, setIsOpen] = useState(hello);

  if (card["@type"]) {
    hello = true;
  }

  function toggleFun() {
    setIsOpen((prev) => !prev);
  }

  if (card.itemCards) {
    const { title, itemCards } = card;
    return (
      <>
        <div className="mt-7">
          <div className="flex justify-between">
            <h1 className={"font-bold text-" + (card["@type"] ? "xl" : "base")}>
              {title} ({itemCards.length})
            </h1>
            <i
              className={
                "fi  text-xl fi-rr-angle-small-" + (isOpen ? "up" : "down")
              }
              onClick={toggleFun}
            ></i>
          </div>
          {isOpen && <DetailMenu itemCards={itemCards} />}
        </div>
        <hr className={"my-5 border-" + (card["@type"] ? "[10px]" : "[4px]")} />
      </>
    );
  } else {
    const { title, categories } = card;
    return (
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        {categories.map((data,i) => (
          <MenuCard key={i} card={data} />
        ))}
      </div>
    );
  }
}

export default MenuCard;
