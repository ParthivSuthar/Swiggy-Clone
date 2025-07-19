import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import { CartContext, Coordinates, Visibility } from "./context/contextApi";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [visible, setVisible] = useState(false);
  const [coord, setCoord] = useState({
    lat: 28.6126255,
    lng: 77.04108959999999,
  });
  const [cartData, setCartData] = useState([]);

  function getDataFromStorage(){
    const data = JSON.parse(localStorage.getItem("cartData")) || []
    setCartData(data)
  }

  useEffect(() => {
    getDataFromStorage()
  },[])

  return (
    // <>
    //   <Header />
    //   <Body />
    // </>
    <CartContext.Provider value={{ cartData, setCartData }}>
      <Coordinates.Provider value={{ coord, setCoord }}>
        <Visibility.Provider value={{ visible, setVisible }}>
          <div className={visible ? "overflow-hidden max-h-screen" : ""}>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route path="/" element={<Body />} />
                <Route
                  path="/restaurantmenu/:id"
                  element={<RestaurantMenu />}
                />
                <Route
                  path="/cart"
                  element={<Cart/>}
                />
                <Route path="*" element={<h1>Coming soon....</h1>} />
              </Route>
            </Routes>
          </div>
        </Visibility.Provider>
      </Coordinates.Provider>
    </CartContext.Provider>
  );
}

export default App;
