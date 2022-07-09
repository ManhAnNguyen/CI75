import React from "react";
import { SButton } from "./styles";

const Button = ({ text, onClick, color }) => {
  return (
    <SButton color={color} onClick={onClick}>
      {text}
    </SButton>
  );
};

export default Button;
