import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Sea Urchin" />
        <Order orderType="Chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;
