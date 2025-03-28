import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LikertScale = () => {
  const [selected, setSelected] = useState(null);
  const options = [
    { value: "1", size: "32px", color: "#27ae60" }, // Green
    { value: "2", size: "28px", color: "#27ae60" },
    { value: "3", size: "24px", color: "#27ae60" },
    { value: "4", size: "20px", color: "#bdc3c7" }, // Neutral (Gray)
    { value: "5", size: "24px", color: "#8e44ad" }, // Purple
    { value: "6", size: "28px", color: "#8e44ad" },
    { value: "7", size: "32px", color: "#8e44ad" },
  ];

  return (
    <div className="text-center mt-5">
      <p className="fw-bold">You regularly make new friends.</p>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <span className="text-success fw-bold">Agree</span>
        {options.map((option) => (
          <label key={option.value} className="position-relative">
            <input
              type="radio"
              name="likert"
              value={option.value}
              checked={selected === option.value}
              onChange={() => setSelected(option.value)}
              className="d-none"
            />
            <span
              className="radio-btn"
              style={{
                width: option.size,
                height: option.size,
                border: `2px solid ${option.color}`,
                borderRadius: "50%",
                display: "inline-block",
                cursor: "pointer",
                position: "relative",
              }}
            >
              {selected === option.value && (
                <span
                  style={{
                    width: "50%",
                    height: "50%",
                    backgroundColor: option.color,
                    borderRadius: "50%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></span>
              )}
            </span>
          </label>
        ))}
        <span className="text-purple fw-bold">Disagree</span>
      </div>
    </div>
  );
};

export default LikertScale;
