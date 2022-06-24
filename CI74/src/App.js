import React, { useState } from "react";
import "./App.css";

const lights = ["red", "yellow", "green"];

const App = () => {
  const [checked, setChecked] = useState(0);

  const handleNext = () => {
    setChecked(checked == 2 ? 0 : checked + 1);
  };

  console.log(checked);
  return (
    <div>
      {lights.map((element, index) => (
        <span
          key={index}
          className={`light ${index === checked && element}`}
        ></span>
      ))}

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default App;
