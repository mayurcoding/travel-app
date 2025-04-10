import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // Use useEffect to manage the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleColor);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleColor);
    };
  }, []);

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