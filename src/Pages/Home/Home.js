import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import "../Home/Components/HomeStyles.css";
import About from "./Components/About";
import Service from "./Components/Service";
import Model from "./Components/Model";
import CallToAction from "./Components/CallToAction";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service/>
      <Model/>
      <CallToAction/>
    </div>
  );
};

export default Home;
