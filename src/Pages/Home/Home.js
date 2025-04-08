import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import "../Home/Components/HomeStyles.css";
import About from "./Components/About";
import Service from "./Components/Service";
import CallToAction from "./Components/CallToAction";
import Faq from "./Components/Faq";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <CallToAction />
      <Faq />
    </div>
  );
};

export default Home;