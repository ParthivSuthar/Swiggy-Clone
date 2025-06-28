/* eslint-disable react/jsx-key */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Discount from "./Discount";
import MenuCard from "./MenuCard";

function RestaurantMenu() {
  const { id } = useParams();
  // let mainId = id.split("-").at(-1).split("rest").replace(",", "")
  let mainId = id.split("-").at(-1).replace(",", "");
  // console.log(mainId);
  const [menuData, setMenuData] = useState([]);
  const [resData, setResData] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  // const [currIndex, setCurrIndex] = useState(0)

  function handleNext() {}

  function handlePrev() {}

  async function fetchMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const res = await data.json();
    // console.log(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    console.log(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    // console.log(res?.data?.cards[2]?.card?.card?.info);
    // console.log(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
    // console.log(menuData);
    setResData(res?.data?.cards[2]?.card?.card?.info);
    setDiscountData(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    // setMenuData(
    //   res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card
    // );

    let actualMenu =
      (res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
        (data) => data?.card?.card?.itemCards
      );
    console.log(actualMenu);
    setMenuData(actualMenu);
  }

  // Independent Toggle Funct 👇 
  function toggleFun(){
    setIsOpen((prev) => !prev);
  }

  // Dependent Toggle Functionality 👇
  // function toggleFun(i){
  //   setCurrIndex(i === currIndex ? null : i)
  // }

  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div className="w-full">
      <div className="w-[800px] mx-auto pt-8">
        <p className="text-[12px] text-slate-500 ">
          {" "}
          <Link to={"/"}>
            {" "}
            <span className="hover:text-slate-700 hover:cursor-pointer">
              Home
            </span>
          </Link>{" "}
          /{" "}
          <Link to={"/"}>
            {" "}
            <span className="hover:text-slate-700 hover:cursor-pointer">
              {resData.city}
            </span>
          </Link>{" "}
          / <span className="text-slate-700">{resData.name}</span>
        </p>
        <h1 className="font-bold pt-6 text-2xl">{resData.name}</h1>
        <div className="w-full h-[206px] bg-gradient-to-t px-4 pb-4 from-slate-200/70  mt-3 rounded-[30px]">
          <div className="w-full border  border-slate-200/70 rounded-[30px] h-full bg-white">
            <div className="w-full p-4">
              <div className="flex items-center gap-1 font-semibold">
                <i className="fi fi-ss-circle-star mt-1 text-green-600 text-lg"></i>
                <span>{resData.avgRating}</span>
                <span>({resData.totalRatingsString})</span>.
                <span>{resData.costForTwoMessage}</span>
              </div>
              <p className="underline font-semibold text-orange-600 ">
                {resData?.cuisines?.join(", ")}
              </p>
              <div className="flex gap-2 mt-2">
                <div className="w-[9px] flex flex-col justify-center items-center">
                  <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
                  <div className="w-[1px] h-[25px] bg-gray-500 "></div>
                  <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-1 text-sm font-semibold">
                  <p>
                    Outlet{" "}
                    <span className="text-gray-500 font-normal">
                      {resData.locality}
                    </span>
                  </p>
                  <p>{resData.sla?.slaString}</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="w-full">
              <div className="flex items-center p-3">
                <img
                  className="w-6"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${resData?.feeDetails?.icon}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex justify-between mt-8">
            <h1 className="font-bold text-xl">Deals for you</h1>
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
          <div className="flex gap-4 mt-5">
            {discountData?.map((data, i) => (
              <Discount data={data} key={i} />
            ))}
          </div>
        </div>

        <h2 className="text-center mt-5 leading-5">MENU</h2>

        <div className="w-full  mt-5 relative cursor-pointer">
          <div className="w-full p-3 rounded-xl font-semibold text-lg bg-slate-200 text-center ">
            Search for dishes
          </div>
          <i className={"fi fi-rr-search absolute top-3 right-4"}></i>
        </div>

        <div>
          {menuData.map(
            ({
              card: {
                card: { itemCards, title },
              },
            }) => (
              <MenuCard title={title} itemCards={itemCards} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
