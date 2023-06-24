import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import "./App.css";
import "./Heading.css";
import "./TouristInfoCards.css";
import "./Footer.css";
import "./Restaurant.css";

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
      <div className="restaurant">
        <Restaurant />
      </div>
      <div className="footer">
        <Footer
          address="123 Fake Street, London, E1 4UD"
          email="hello@fakehotel.com"
          telephone="0123 456789"
        />
      </div>
    </div>
  );
};

export default App;
