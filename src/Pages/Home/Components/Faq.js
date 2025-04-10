import React, { useState } from "react";

const Faq = () => {
  const data = [
    {
      question: "What is the best time to visit this place?",
      answer:
        "The best time to visit this place is during the spring and fall seasons when the weather is mild and pleasant.",
    },
    {
      question: "What are the must-see attractions in this area?",
      answer:
        "Some of the must-see attractions include the local museum, historical landmarks, and beautiful parks.",
    },
    {
      question: "Are there any local festivals or events happening soon?",
      answer:
        "Yes, there are several local festivals and events happening throughout the year. Check the local calendar for details.",
    },
    {
      question: "What are the best local restaurants to try?",
      answer:
        "Some of the best local restaurants include 'The Gourmet Kitchen', 'Taste of Tradition', and 'Culinary Delights'.",
    },
    {
      question: "Is public transportation available in this area?",
      answer:
        "Yes, public transportation is available and includes buses, trains, and taxis.",
    },
  ];
  const [selected, setSelected] = useState(null);

  const handleSelect = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <h1 className="heading"> FAQ </h1>
      <section className="faq">
        <div className="item">
          {data.map((item, i) => {
            return (
              <div className="wrapper" key={i}>
                <div className="question" onClick={() => handleSelect(i)}>
                  <h3>{item.question}</h3>
                  <img
                    src={require("../../../assets/faq1.png")}
                    alt="FAQ"
                    className={selected === i ? "reverse" : ""}
                  />
                </div>
                <div className={selected === i ? "answers show" : "answers"}>
                  <p>{item.answer}</p> {/* Fixed: Changed item.answers to item.answer */}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;