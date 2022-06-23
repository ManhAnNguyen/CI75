import React from "react";

const Item = (props) => {
  return (
    <div className="container">
      <div className="content-left">
        <h4 className="h4">{props.h4}</h4>
        <p className="p">{props.p}</p>
      </div>
      <div className="content-right">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

export default Item;
