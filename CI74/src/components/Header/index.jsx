import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/ex1">Ex1 Page</Link>
      <Link to="/ex2">Ex2 Page</Link>
    </div>
  );
};

export default Header;
