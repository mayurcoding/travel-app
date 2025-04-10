import "./Footer.css";
import { Link } from "react-router-dom";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  const social = [fb, twitter];
  return (
    <footer>
      <h1>VoyageVista</h1>
      <div className="links">
        <Link to="/">Home</Link> 
        <Link to="/training">Training</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="social">
        {social.map((item) => {
          return <img src={item} alt="" />;
        })}
      </div>
    </footer>
  );
};

export default Footer;
