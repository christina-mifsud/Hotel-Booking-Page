import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const numberPizzas = 0;
function Order() {
  const [order, setOrder] = useState(numberPizzas);
  function orderOne() {
    setOrder(order + 1);
  }
  return (
    <li>
      Pizzas: {order} <RestaurantButton setOrder={orderOne} />
    </li>
  );
}

export default Order;
