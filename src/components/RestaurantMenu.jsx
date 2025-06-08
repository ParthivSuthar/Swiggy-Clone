import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function RestaurantMenu() {
  const { id } = useParams();
  // let mainId = id.split("-").at(-1).split("rest").replace(",", "")
  let mainId = id.split("-").at(-1).replace(",", "");
  // console.log(mainId);
  const [menuData, setMenuData] = useState("")

  async function fetchMenu(){
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`)
      const res = await data.json()
      // console.log(res?.data?.cards[0]?.card?.card?.text);
      setMenuData(res?.data?.cards[0]?.card?.card?.text)
  }

  useEffect(() => {
    fetchMenu();
  }, [])
  return <div>RestaurantMenu - {mainId} {menuData}</div>
  
}

export default RestaurantMenu;
