import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { image, price, title, id } = product;
  return (
    <Link to={`/ex1/${id}`}>
      <div className="product">
        <img src={image} alt="" />
        <p className="name">{title}</p>
        <p className="price">{price}</p>
      </div>
    </Link>
  );
};

export default Product;
