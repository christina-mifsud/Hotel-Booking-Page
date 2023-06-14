import React, { useState } from "react";

const Restaurant = () => {
  const [order, orderState] = useState(0);
  function setOrders() {
    orderState(order + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order}{" "}
          <button className="btn btn-primary" onClick={setOrders}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
