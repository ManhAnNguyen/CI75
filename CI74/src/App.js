import React, { useState } from "react";

const App = () => {
  const [products, setProducts] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();

    setProducts(data);
  };

  console.log(products);

  return (
    <div>
      <button onClick={fetchData}>Call Api</button>
      {products &&
        products.map((product, index) => <h1 key={index}>{product.title}</h1>)}
    </div>
  );
};

export default App;
