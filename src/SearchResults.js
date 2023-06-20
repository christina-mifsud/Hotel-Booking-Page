import moment from "moment";
import React, { useState } from "react";

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
          const [highlight, setHighlight] = useState(false);
          function isSelected() {
            setHighlight(!highlight);
          }
          const addClass = highlight ? "highlighted" : "";

          return (
            <>
              <tr onClick={isSelected} className={addClass}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.firstName}</td>
                <td>{element.surname}</td>
                <td>{element.email}</td>
                <td>{element.roomId}</td>
                <td>{element.checkInDate}</td>
                <td>{element.checkOutDate}</td>
                <td>
                  {moment(element.checkOutDate).diff(
                    element.checkInDate,
                    "days"
                  )}
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
