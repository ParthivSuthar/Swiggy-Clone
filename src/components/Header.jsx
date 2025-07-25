import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext, Coordinates, Visibility } from "../context/contextApi";

// https://www.swiggy.com/dapi/misc/address-recommend?place_id=ChIJLbZ-NFv9DDkRQJY4FbcFcgM

function Header() {
  const navItems = [
    {
      name: "Swiggy Corporate",
      image: "fi-rr-shopping-bag",
      path: "/corporate",
    },
    {
      name: "Search",
      image: "fi-rr-search",
      path: "/search",
    },
    {
      name: "Offers",
      image: "fi-rr-badge-percent",
      path: "/offers",
    },
    {
      name: "Help",
      image: "fi-sr-life-ring",
      path: "/help",
    },
    {
      name: "Sign in",
      image: "fi-rr-user",
      path: "/signin",
    },
    {
      name: "Cart",
      image: "fi-rr-shopping-cart-add",
      path: "/cart",
    },
  ];

  const { visible, setVisible } = useContext(Visibility);
  const [address, setAddress] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { cartData, setCartData } = useContext(CartContext);

  const { setCoord } = useContext(Coordinates);

  // function handleSearchFunctionality() {
  //   setVisible((prev) => !prev);
  // }

  function handleVisibility() {
    setVisible((prev) => !prev);
  }

  async function searchResultFun(val) {
    if (val == "") return;
    const res = await fetch(
      `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${val}`
    );
    const data = await res.json();
    console.log(data.data);
    setSearchResult(data.data);
  }

  async function fetchLatAndLng(id) {
    if (id == "") return;
    handleVisibility();
    const res = await fetch(
      `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${id}`
    );
    const data = await res.json();
    setCoord({
      lat: data.data[0].geometry.location.lat,
      lng: data.data[0].geometry.location.lng,
    });
    setAddress(data.data[0].formatted_address);
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
            " bg-white w-full md:w-[40%] h-full p-5 z-40 absolute duration-500 " +
            (visible ? "left-0" : "-left-[100%]")
          }
        >
          <div className="flex flex-col gap-4 mt-3 w-full lg-[50%] mr-6">
            <i className="fi fi-br-cross" onClick={handleVisibility}></i>
            <input
              type="text"
              className="border p-5 focus:outline-none focus:shadow-lg"
              // onChange={(e) => searchResultFun(e.target.value)}
              onChange={(e) => searchResultFun(e.target.value)}
            />
          </div>
          <div className="border p-5">
            <ul>
              {searchResult.map((data, i) => {
                const isLast = i === searchResult.length - 1;
                return (
                  <div className="my-5" key={i}>
                    <div className="flex gap-4">
                      <i className="fi mt-1 fi-rr-marker"></i>
                      <li onClick={() => fetchLatAndLng(data.place_id)} key={i}>
                        {data.structured_formatting.main_text}
                        <p className="text-sm opacity-65">
                          {data.structured_formatting.secondary_text}
                        </p>
                        {!isLast && (
                          <p className="opacity-35">
                            ---------------------------------------------
                          </p>
                        )}
                      </li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
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
              <Link to={data.path} key={i}>
                <div className="flex items-center gap-2 ">
                  {/* <i className="fi fi-rr-shopping-bag"></i> */}
                  <i className={"mt-1 fi " + data.image}></i>
                  <p className="text-sm font-medium text-gray-700">
                    {data.name}
                  </p>
                  {data.name === "Cart" && <p>{cartData.length}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
