import React from "react";

const About = () => {
  return (
    <>
      <h1 className="heading"> About us </h1>
      <section className="about">
        <img src={require("../../../assets/img1.jpg")} alt="About Us" />
        <div className="content">
          <h2>Inspiring Journeys, One Destination at a Time.</h2>
          <p>
            We’re passionate about making travel easy, exciting, and accessible.
            Our platform empowers explorers to discover stunning destinations,
            create personalized travel plans, and book unforgettable experiences
            — all with just a few clicks. Whether you're chasing sunsets,
            adventure, or relaxation, we're here to guide your every step.
          </p>
          <p>
            At our core, we believe travel should be more than just movement —
            it should be a memory worth cherishing. That’s why we’ve built a
            platform that brings together the best destinations, real user
            reviews, and seamless booking tools to help you travel smarter,
            safer, and better. Let us handle the details while you focus on the
            adventure ahead.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
