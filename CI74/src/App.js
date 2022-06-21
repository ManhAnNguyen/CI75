import React from "react";
import Title from "./components/Title/Title";
import "./App.css";

const App = () => {
  return (
    <div>
      <Title title="A Simple Component" />

      <Title title="A Stateful Component" />
      <Title title="An Application" />
    </div>
  );
};

export default App;

//<Title /> self-closing-tag
