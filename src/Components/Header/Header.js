import "./Header.css";

import headerImg from "../../assets/header.jpg";

const Header = ({heading}) => {
  return (
    <section
      className="header"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "fixed",
      }}
    >
      <h1>{heading}</h1>
      <p>
        Discover breathtaking destinations, seamless bookings, and unforgettable
        adventures—all in one place.
      </p>
    </section>
  );
};
export default Header;
