import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orderCount, setOrderCount] = useState(0);

  const orderOne = () => {
    setOrderCount((orderCount) => {
      return orderCount + 1;
    });
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orderCount}
          <RestaurantButton orderOne={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
