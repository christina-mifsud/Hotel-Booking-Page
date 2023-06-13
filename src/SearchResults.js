import moment from "moment";
import React from "react";

function SearchResults({ results }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((element) => {
          return (
            <>
              <tr>
                <th>{element.id}</th>
                <th>{element.title}</th>
                <th>{element.firstName}</th>
                <th>{element.surname}</th>
                <th>{element.email}</th>
                <th>{element.roomId}</th>
                <th>{element.checkInDate}</th>
                <th>{element.checkOutDate}</th>
                <th>
                  {moment(element.checkOutDate).diff(
                    element.checkInDate,
                    "days"
                  )}
                </th>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
