import { FaTimes } from "react-icons/fa";
const Model = ({ handleClick }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="cross">
          <FaTimes style={{ color: "white" }} size={25} onClick={handleClick} />
        </div>
        <h2>
          The modal in our travel website provides a quick and seamless way for
          users to view booking details.{" "}
        </h2>
      </div>
    </div>
  );
};

export default Model;
