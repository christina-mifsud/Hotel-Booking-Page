import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  // initialise bookings state with FakeBookings
  // i.e. when the page first loads up data in FakeBookings will show
  // setBookings function will be called later to change the state with filter
  const [bookings, setBookings] = useState(FakeBookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
