import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomRadioButtons = () => {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="d-flex gap-3 justify-content-center mt-5">
      {["option1", "option2", "option3"].map((option, index) => (
        <label
          key={option}
          className={`radio-container btn btn-outline-primary ${
            selected === option ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="custom-radio"
            value={option}
            checked={selected === option}
            onChange={() => setSelected(option)}
          />
          <span className="radio-check"></span>
          
        </label>
      ))}
    </div>
  );
};

export default CustomRadioButtons;
