import React from "react";
import styled from "styled-components";
import Button from "./components/Button";

const App = () => {
  const handleClick = () => {
    alert("click");
  };
  return (
    <SApp>
      <Button text="ok" color="red" onClick={handleClick} />
      <Button text="ok 2" color="yellow" onClick={() => alert("click2")} />
      <div className="text">dasdas</div>
    </SApp>
  );
};

export default App;

const SApp = styled.div`
  .text {
    color: red;
  }
`;
