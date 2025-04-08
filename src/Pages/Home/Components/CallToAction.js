import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <h2>Hurry up Book your Tickets</h2>
      <Link to="/pricing">Know More!</Link>
    </section>
  );
};

export default CallToAction;
