import React, { useState } from "react";
import { toast } from "react-toastify";

const Ex1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [store, setStore] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //input == '' -> input : false ; !false : true;
    if (!inputValue) {
      toast.error("Input should not be empty!!");
      return;
    }
    setStore([...store, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Ex1;
