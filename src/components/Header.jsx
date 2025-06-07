import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
  const navItems = [
    {
      name: "Swiggy Corporate",
      image: "fi-rr-shopping-bag",
    },
    {
      name: "Search",
      image: "fi-rr-search",
    },
    {
      name: "Offers",
      image: "fi-rr-badge-percent",
    },
    {
      name: "Help",
      image: "fi-sr-life-ring",
    },
    {
      name: "Sign in",
      image: "fi-rr-user",
    },
    {
      name: "Cart",
      image: "fi-rr-shopping-cart-add",
    },
  ];

  return (
    <>
      <div className="w-full shadow-md h-24 flex justify-center items-center">
        <div className=" w-[70%] flex justify-between">
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                className="w-24"
                src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
                alt="logo"
              />
            </Link>
            <div className="flex items-center gap-2">
              <p className="font-semibold border-b-2 border-black">others</p>
              <i className="fi text-2xl mt-2 text-orange-500 fi-rs-angle-small-down"></i>
            </div>
          </div>

          <div className="flex items-center gap-12">
            {navItems.map((data, i) => (
              <div className="flex items-center gap-2 " key={i}>
                {/* <i className="fi fi-rr-shopping-bag"></i> */}
                <i className={"mt-1 fi " + data.image}></i>
                <p className="text-sm font-medium text-gray-700">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
