import react from "react";

const Footer = ({ address, email, telephone }) => {
  return (
    <ul>
      <li>{address}</li>
      <li>{email}</li>
      <li>{telephone}</li>
    </ul>
  );
};
export default Footer;
