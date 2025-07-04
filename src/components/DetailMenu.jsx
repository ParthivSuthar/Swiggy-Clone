/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

function DetailMenu({ itemCards }) {
  let veg =
    "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png";
  let nonVeg =
    "https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png";
  return (
    <div className="my-5">
      {itemCards.map(
        (
          {
            card: {
              info: {
                name,
                defaultPrice,
                price,
                itemAttribute: { vegClassifier },
                ratings: {
                  aggregatedRating: { rating, ratingCountV2 },
                },
                description,
                imageId,
              },
            },
          },
          i
        ) => {
          const [isMore, setIsMore] = useState(false);
          let trimDesc = description.substring(0, 138) + "...";
          return (
            <>
              <div
                key={i}
                className="flex w-full justify-between min-h-[182px]"
              >
                <div className="w-[55%] md:w-[70%]">
                  <img
                    className="w-5 rounded-sm"
                    src={vegClassifier == "VEG" ? veg : nonVeg}
                    alt=""
                    srcSet=""
                  />
                  {/* <p>{vegClassifier}</p> */}
                  <h2 className="font-bold text-lg">{name}</h2>
                  <p className="font-bold text-lg">
                    ₹{defaultPrice / 100 || price / 100}{" "}
                  </p>

                  <div className="flex items-center gap-1">
                    {" "}
                    <i className={"fi mt-1 text-xl fi-ss-star"}></i>{" "}
                    <span>
                      {rating} ({ratingCountV2})
                    </span>
                  </div>
                  {description.length > 40 ? (
                    <div>
                      <span className=" line-clamp-2 md:line-clamp-none ">
                        {isMore ? description : trimDesc}
                      </span>
                      <button
                        className="hidden md:block font-bold"
                        onClick={() => setIsMore(!isMore)}
                      >
                        {isMore ? "less" : "more"}
                      </button>
                    </div>
                  ) : (
                    <span className="">{description}</span>
                  )}
                </div>
                <div className="w-[40%] md:w-[20%] relative h-full">
                  <img
                    className="rounded-xl aspect-square"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      imageId
                    }
                    alt="recipeimg"
                  />
                  <button className="border bottom-[-20px] left-5 absolute text-lg font-bold rounded-xl bg-white px-10 text-green-500 py-2 drop-shadow">
                    ADD
                  </button>
                </div>
              </div>
              <hr className="my-5" />
            </>
          );
        }
      )}
    </div>
  );
}

export default DetailMenu;
