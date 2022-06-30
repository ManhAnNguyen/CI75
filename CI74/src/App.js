import React from "react";
import Ex1 from "./Home/Ex1";
import Ex2 from "./Home/Ex2";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Ex2 />
      <ToastContainer position="top-left" theme="dark" />
    </div>
  );
};

export default App;
