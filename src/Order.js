import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orderCount, setOrderCount] = useState(0);

  const orderOne = () => {
    setOrderCount((orderCount) => {
      return orderCount + 1;
    });
  };

  return (
    <li>
      {orderType}: {orderCount}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
