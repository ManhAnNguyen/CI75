import React, { useState } from "react";
import "./styles.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from "react-loader-spinner";
import Product from "./Product";
import Header from "../../components/Header";

const Ex1 = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState(null);

  const handleGetData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      setError(true);
    }

    setLoading(false);
  };

  if (error) return <h1>Oh no error is occurring!!!</h1>;

  return (
    <div>
      {products ? (
        <div className="product-list">
          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      ) : (
        <button className="ex1-btn" onClick={handleGetData}>
          {isLoading ? (
            <Circles color="white" height={20} width={20} />
          ) : (
            "Get All Products"
          )}
        </button>
      )}
    </div>
  );
};

export default Ex1;
