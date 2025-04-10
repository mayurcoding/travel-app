import React from "react";
import SingleCard from "./SingleCard";

const Card = () => {
  const data = [
    {
      id: 1,
      heading: "Basic",
      line1: "10 lakhs",
      line2: "No unlimited Access",
      line3: "No Food",
    },
    {
      id: 2,
      heading: "Standard",
      line1: "20 lakhs",
      line2: "Unlimited Access",
      line3: "Food Available",
    },
    {
      id: 3,
      heading: "Premium",
      line1: "50 lakhs",
      line2: "Unlimited Access",
      line3: "Food Available",
    },
  ];

  return (
    <>
      <h1 className="heading">Pricing</h1>
      <section className="cards">
        {data.map((item) => {
          const { id, heading, line1, line2, line3 } = item;
          return (
            <SingleCard
              id={id}
              heading={heading}
              line1={line1}
              line2={line2}
              line3={line3}
            />
          );
        })}
      </section>
    </>
  );
};
export default Card;
