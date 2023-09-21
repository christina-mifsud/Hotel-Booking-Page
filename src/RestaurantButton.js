import React from "react";

function RestaurantButton({ setOrders }) {
  return (
    <>
      <button className="btn btn-primary order-button" onClick={setOrders}>
        Add Item
      </button>
    </>
  );
}

export default RestaurantButton;
