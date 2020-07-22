import React from "react";
import "./CartItem.scss";

export const CartItem = (props) => {
  const { image, price, name, qty } = props.item;
  return (
    <div className="CartItem">
      <img src={image} alt="item" />
      <div className="CardItem-detailsContainer">
        <span className="CardItem-name"> {name}</span>
        <span className="CardItem-price">
          {qty} x ${price}
        </span>
      </div>
    </div>
  );
};
