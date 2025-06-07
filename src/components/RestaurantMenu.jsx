import React from "react";
import { useParams } from "react-router";

function RestaurantMenu() {
  const { id } = useParams();
  return <div>RestaurantMenu - {id}</div>
}

export default RestaurantMenu;
