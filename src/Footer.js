import React from "react";

const footerArray = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

function Footer() {
  const footerAddress = footerArray.map((item, index) => (
    <li className="footer-item" key={index}>
      {item}
    </li>
  ));

  return (
    <div className="footer-container">
      <ul className="footer-ul">{footerAddress}</ul>
    </div>
  );
}

export default Footer;
