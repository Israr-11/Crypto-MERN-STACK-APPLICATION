import React from "react";
// import { FaBitcoin } from "react-icons/fa";
// import StarRating from "./star";

const Product = () => {
  return (
    <div className="product" >

      <div className="product__name" >
        <h3>Name</h3>
      </div>

      <div className="product__reminder-price">
        <h3>Reminder</h3>

      </div>
      <div className="product__current-price">
        <h3>Price</h3>
      </div>
      <div className="product__change-percentage">
        <h3>Change %</h3>
      </div>
      <div className="product__desired-price">
        <h3>Desired Price</h3>
      </div>
    </div>
  );
};

export default Product;
