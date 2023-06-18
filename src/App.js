import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import "./Heading.css";
import "./TouristInfoCards.css";
import TouristInfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <div className="heading">
        <Heading />
      </div>
      <div className="card-container">
        <TouristInfoCards />
      </div>
      <div className="bookings">
        <Bookings />
      </div>
    </div>
  );
};

export default App;
