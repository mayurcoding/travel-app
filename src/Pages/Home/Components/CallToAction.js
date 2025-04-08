import React, { useState } from "react";
import Modal from "./Model";
const CallToAction = () => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <>
      <section className="call-to-action">
        <h2>Hurry up Book your Tickets</h2>
        <button onClick={handleClick}>Known More!</button>
      </section>
      {modal && <Modal modal={modal} handleClick={handleClick} />}
    </>
  );
};

export default CallToAction;
