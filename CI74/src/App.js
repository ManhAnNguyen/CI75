import React, { useEffect, useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [productDetail, setProductDetail] = useState(null);

  const handleSearch = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${inputValue}`);
    const data = await res.json();
    setProductDetail(data);
  };

  useEffect(() => {
    if (inputValue) {
      handleSearch();
    }
  }, [inputValue]);

  console.log(productDetail);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default App;
