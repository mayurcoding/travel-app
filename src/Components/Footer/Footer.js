import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.webp";
import istagram from "../../assets/istagram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  const social = [facebook, istagram, twitter];
  return (
    <footer>
      <h1>
        <Link to="/">VoyageVista</Link>
      </h1>
      <div className="links">
        <h2> Usefull Links</h2>
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
