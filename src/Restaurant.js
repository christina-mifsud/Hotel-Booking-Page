import React, { useState } from "react";

const Restaurant = () => {
  const [orderCount, setOrder] = useState(0);

  const orderOne = () => {
    setOrder(orderCount + 1);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orderCount}{" "}
          <button onClick={orderOne} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
