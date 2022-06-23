import React from "react";

const Button = ({ text, bg, borderRadius }) => {
  return (
    <button style={{ background: bg, borderRadius: borderRadius }}>
      {text}
    </button>
  );
};

export default Button;
