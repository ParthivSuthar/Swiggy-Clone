import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
    // <>
    //   <Header />
    //   <Body />
    // </>
    <div className="overflow-hidden max-h-screen">
      <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Body />} />
        <Route path="/restaurantmenu/:id" element={<RestaurantMenu />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
