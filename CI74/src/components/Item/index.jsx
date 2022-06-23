import React from "react";
import "./styles.css";

const Item = ({ item }) => {
  return (
    <div className="item">
      <div className="content-left">
        <img src={item.image} alt="" />
      </div>
      <div className="content-right">
        <h3>{item.title}</h3>
        <h3>{item.price}</h3>
      </div>
    </div>
  );
};

export default Item;
