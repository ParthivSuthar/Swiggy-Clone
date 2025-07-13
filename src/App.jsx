import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import { Coordinates, Visibility } from "./context/contextApi";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  const [coord, setCoord] = useState({
    lat: 28.6126255,
    lng: 77.04108959999999,
  });
  return (
    // <>
    //   <Header />
    //   <Body />
    // </>
    <Coordinates.Provider value={{ coord, setCoord }}>
      <Visibility.Provider value={{ visible, setVisible }}>
        <div className={visible ? "overflow-hidden max-h-screen" : ""}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<Body />} />
              <Route path="/restaurantmenu/:id" element={<RestaurantMenu />} />
            </Route>
          </Routes>
        </div>
      </Visibility.Provider>
    </Coordinates.Provider>
  );
}

export default App;
