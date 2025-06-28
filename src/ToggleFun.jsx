/* eslint-disable react/jsx-key */
import React from 'react'

function ToggleFun() {
  return (
    <div>
                <div className="flex justify-between">
                  <h1>{title} ({itemCards.length})</h1>
                  <i className={`fi text-xl fi-rr-angle-small-${isOpen ? "up" : "down"}`} onClick={toggleFun}></i>
                </div>
                {/* Dependent Toggle Functionality 👇 */}
                {/* {
                  i === currIndex && 
                  <div className="m-3">
                  {itemCards.map(({ card: { info } }) => (
                    <h1>{info.name}</h1>
                  ))}
                </div>
                } */}
                {/* Independent Toggle Functionality 👇 */}
                {isOpen && 
                  <div className="m-3">
                  {itemCards.map(({ card: { info } }) => (
                    <h1>{info.name}</h1>
                  ))}
                </div>
                }
              </div>
  )
}

export default ToggleFun