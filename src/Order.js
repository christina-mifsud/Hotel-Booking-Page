import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orderCount, setOrderCount] = useState(0);

  const orderOne = () => {
    setOrderCount((orderCount) => {
      return orderCount + 1;
    });
  };

  return (
    <li>
      Pizzas: {orderCount}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
