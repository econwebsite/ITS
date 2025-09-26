// src/components/Marketscomp/Market.jsx
import React from "react";
import Applications from "./Applications";
import Products from "./Products";

const Market = () => {
  return (
    <div className="market-container">
      <Applications />
       <Products />
    </div>
  );
};

export default Market;
