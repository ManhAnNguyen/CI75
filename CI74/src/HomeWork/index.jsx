import React from "react";
import Title from "./Ex1/Title";
import Button from "./Ex2/Button";
import Item from "./Ex3/Item";

const HomeWork = () => {
  return (
    <div>
      <Button text="Save" bg="red" borderRadius="50%" />
      <Button text="Delete" bg="green" />
      <Button text="Cancel" bg="yellow" />
    </div>
  );
};

export default HomeWork;
