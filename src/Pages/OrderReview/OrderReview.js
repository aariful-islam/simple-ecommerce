import React from "react";

import "./OrderReview.css";
const OrderReview = ({ cart, handleRemoveProduct }) => {
  const { name, img, quantity, price, shipping } = cart;
  return (
    <div className="review-item ">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details">
          <p className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price: ${price}
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveProduct(cart)}
            
          > Remove</button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
