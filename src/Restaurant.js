import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <img
            src="https://scdn.aro.ie/Sites/50/imperialhotels2022/uploads/images/PanelImages/General/156757283_Bedford_Hotel__F_B__Botanica_Restaurant_and_Bar__General_View._4500x3000.jpg"
            className="card-img-top"
            alt="Restaurant View"
          />
        </div>

        <div className="card">
          <img
            src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
            className="card-img-top"
            alt="Restaurant View"
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
