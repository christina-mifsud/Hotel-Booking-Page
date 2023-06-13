import React from "react";
import Headers from "./Headers";
import Bookings from "./Bookings";
import FakeBookings from "./data/fakeBookings.json";
import SearchResults from "./SearchResults";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Headers />
      <Bookings />
      <SearchResults results={FakeBookings} />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;
