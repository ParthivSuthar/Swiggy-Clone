import React, { useState } from "react";
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

  const [visible, setVisible] = useState(false);
  const [address, setAddress] = useState("");

  // function handleSearchFunctionality() {
  //   setVisible((prev) => !prev);
  // }

  function handleVisibility() {
    setVisible((prev) => !prev);
  }

  return (
    <>
      <div className="w-full">
        <div
          className={
            "w-full bg-black/50 h-full  absolute z-30 " +
            (visible ? "visible" : " invisible")
          }
        ></div>
        <div
          className={
            " bg-white flex justify-end  w-full md:w-[40%] h-full p-5 z-40 absolute duration-500 " +
            (visible ? "left-0" : "-left-[100%]")
          }
        >
          <p
            className="bg-black text-white p-5 w-[10%]"
            onClick={handleVisibility}
          >
            cut
          </p>
        </div>
      </div>

      <div className="w-full sticky bg-white z-20 top-0 shadow-md h-24 flex justify-center items-center">
        <div className=" w-[70%] flex justify-between">
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                className="w-24"
                src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
                alt="logo"
              />
            </Link>
            <div
              className="flex items-center gap-2 "
              onClick={handleVisibility}
            >
              <p className="flex items-center">
                <span className="font-bold border-b-2  border-black">
                  others
                </span>
                <span className="ml-2 max-w-[250px] text-sm opacity-85 line-clamp-1">
                  {address}
                </span>
              </p>
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
