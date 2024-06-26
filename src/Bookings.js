import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filterBookings, setFilterBookings] = useState([]); // second state in order to protect OG array

  useEffect(() => {
    console.log("some text, some more text");
    fetch("https://cyf-hotel-api.netlify.app/")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setFilterBookings(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const search = (searchVal) => {
    let searchResult = bookings.filter((booking) => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setFilterBookings(searchResult);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookingsArray={filterBookings} />
      </div>
    </div>
  );
};

export default Bookings;
