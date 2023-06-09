import React from "react";
import Headers from "./Headers";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Headers />
      <Bookings />
      <TouristInfoCards />
    </div>
  );
};

export default App;
