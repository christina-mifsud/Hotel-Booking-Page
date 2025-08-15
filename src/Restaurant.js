import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <img
            src="/restaurant-table-setup.jpg"
            className="card-img-top"
            alt="Restaurant Table Setup"
          />
        </div>

        <div className="card">
          <img
            src="/restaurant-bar-setup.jpg"
            className="card-img-top"
            alt="Restaurant Bar Setup"
          />
        </div>

        <div className="card card-restaurant">
          <h4 className="restaurant-title">Restaurant Orders</h4>
          <ul className="restaurant-tr">
            <Order orderType={"Pizza"} />
            <Order orderType={"Salads"} />
            <Order orderType={"Chocolate Cake"} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
