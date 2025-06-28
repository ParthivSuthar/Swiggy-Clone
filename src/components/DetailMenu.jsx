/* eslint-disable react/prop-types */
import React from "react";

function DetailMenu({ itemCards }) {
  return (
    <div className="m-5">
      {itemCards.map(({ card: { info } }) => (
        <h1>{info.name}</h1>
      ))}
    </div>
  );
}

export default DetailMenu;
