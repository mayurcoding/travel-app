import React from "react";

const About = () => {
  return (
    <>
      <h1 className="heading"> Services </h1>
      <section className="services">
        <img src={require("../../../assets/img5.jpg")} alt="About Us" />
        <img src={require("../../../assets/img7.jpg")} alt="About Us" />

        <div className="content"></div>
      </section>
    </>
  );
};

export default About;
