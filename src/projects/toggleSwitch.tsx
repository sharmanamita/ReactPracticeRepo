import { useState } from "react";
import "./toggleSwitch.css";
import { FaUserCircle } from "react-icons/fa";

const ToggleSwicth = () => {
  const [isOn, setOn] = useState(true);
  const bgColor = isOn ? "#006bb3" : "#b3b3b3";
  const label = isOn ? "on" : "off";

  return (
    <>
      <div className="container">
        <FaUserCircle />
        <button
          className="btn"
          onClick={() => setOn(!isOn)}
          style={{ backgroundColor: bgColor }}
        >
          <div className={`switch ${label}`}>
            {label}
          </div>
        </button>
      </div>
    </>
  );
};

export default ToggleSwicth;
