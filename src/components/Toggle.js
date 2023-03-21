import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const color = isOn ? "red" : "cyan";

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <button style={{
      background: color,
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      fontSize: "1.5rem",
      fontWeight: "bold",
      cursor: "pointer",
    }}
      onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
