import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);
  const handleColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  return (
    <nav className={color ? "color" : ""}>
      <div className="logo">
        <h1>VoyageVista</h1>
      </div>
      <div className={click ? "menu active" : "menu"}>
        <Link to="/">Home</Link>
        <Link to="/training">Training</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={25} style={{ color: "white" }} />
        ) : (
          <FaBars size={25} style={{ color: "white" }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
