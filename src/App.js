import React from "react";
import Headers from "./Headers";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Headers />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;
