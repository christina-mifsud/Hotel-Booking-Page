import React from "react";

function Header() {
  return (
    <div className="header-icon-title">
      <img
        src="/hotel-icon.png"
        alt="Hotel Logo"
        style={{ width: "30px", height: "30px" }}
      />
      <header className="header-title">CYF Hotel</header>
    </div>
  );
}

export default Header;
