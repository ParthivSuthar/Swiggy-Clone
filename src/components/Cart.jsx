import React, { useContext } from "react";
import { CartContext } from "../context/contextApi";
import { Link } from "react-router-dom";

function Cart() {
  const { cartData, setCartData } = useContext(CartContext);

  function handleRemoveFromCart(i) {
    let newArr = [...cartData];
    newArr.splice(i, 1);
    setCartData(newArr);
    localStorage.setItem("cartData", JSON.stringify(newArr));
  }

  function handleClearCart(){
    setCartData([])
    // localStorage.setItem("cartData",JSON.stringify([]))
    localStorage.clear()
  }
  //   let totalPrice = 0;

  //   for(let i=0; i<cartData.length; i++){
  //     totalPrice = totalPrice + cartData[i].price / 100 || cartData[i].defaultPrice / 100
  //   }

  let totalPrice = cartData.reduce(
    (acc, curVal) => acc + curVal.price / 100 || curVal.defaultPrice / 100,
    0
  );

  if (cartData.length === 0) {
    return (
      <div className="w-full">
        <div className="w-[50%]  mx-auto">
          <h1>kuch order krle bhai bhuka marega kya....</h1>
          <Link to="/" className="bg-green-500 p-2 inline-block my-3">
            Yaha se krle bhai order
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-[50%] mx-auto">
        {cartData.map((data, i) => (
          <div className="flex w-full justify-between my-5 p-2" key={i}>
            <div className="w-[70%]">
              <h2 className=" text-3xl">{data.name}</h2>
              <p>Price - ₹{data.price / 100 || data.defaultPrice / 100}</p>
            </div>
            <div className="w-[40%] md:w-[20%] relative h-full">
              <img
                className="rounded-xl aspect-square"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  data.imageId
                }
                alt="recipeimg"
              />
              <button
                onClick={() => handleRemoveFromCart(i)}
                className="bg-white absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-base text-red-500 font-bold rounded-xl border px-5 py-2 drop-shadow"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <h2>Total - ₹{totalPrice}</h2>
        <button
          onClick={handleClearCart}
          className="p-3 bg-green-600 rounded-lg my-7"
        >
          clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
