import React from "react";

function Header() {
  return (
    <div className="w-full shadow-md h-24 flex justify-center items-center">
      <div className=" w-[70%] flex justify-between">
        <div className="flex items-center">
          <img
            className="w-24"
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
            alt="logo"
          />
          <div className="flex items-center gap-2">
            <p className="font-semibold border-b-2 border-black">others</p>
            <i className="fi text-2xl mt-2 text-orange-500 fi-rs-angle-small-down"></i>
          </div>
        </div>
          
        <div className="flex items-center gap-6">
            <div className="flex ">
                <i className="fi fi-rr-shopping-bag"></i>
                <p>Swiggy Corporate</p>
            </div>
            <div className="flex ">
                <i className="fi-rr-search"></i>
                <p>Search</p>
            </div>
            <div className="flex ">
                <i className="fi fi-rr-badge-percent"></i>
                <p>Offers</p>
            </div>
            <div className="flex ">
                <i className="fi fi-sr-life-ring"></i>
                <p>Help</p>
            </div>
            <div className="flex ">
                <i className="fi-rr-user"></i> // Start from 8:00 Part 2
                <p>Sign in</p>
            </div>
            <div className="flex ">
                <i className="fi-rr-shopping-cart-add"></i>
                <p>Cart</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
