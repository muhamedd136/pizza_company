import React, { useState } from "react";
import "./MenuCard.scss";
import { Button } from "react-bootstrap";

export const MenuCard = (props) => {
  const { name, price, image, ingredients, id } = props;

  const [itemInfo, setItemInfo] = useState({
    id: id,
    name: name,
    price: price,
    image: image,
    ingredients: ingredients,
    qty: 0,
  });

  const changeQty = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setItemInfo({
      ...itemInfo,
      [name]: value,
    });
  };

  return (
    <div className="MenuCard">
      <img
        className="MenuCard-img"
        src="https://lh3.googleusercontent.com/proxy/af3xj_WRooaDqmS4HPQHKGyERvoEaC1Kz4hIW5LngVuOleYE5jroYNoG1C-fUBANKvTsYlIBTCq305wAdQAH4kZHSRbYH0s17kJVWlWcpz3U_8O_TfdZIMyeSIMkxl0Gl5nr9jjifNq5JXRzNkOYVw"
        alt="pizza"
      />
      <div className="MenuCard-text">{name}</div>
      <div className="MenuCard-price"> ${price} </div>
      <div className="MenuCard-ingredients">
        {ingredients
          ? ingredients.map((item, index) => {
              let sign = ", ";
              if (index === ingredients.length - 1) {
                sign = ".";
              }
              return (
                <span className="MenuCard-ingredient" key={index}>
                  {item}
                  {sign}
                </span>
              );
            })
          : null}
      </div>
      <div className="MenuCard-qty">
        <label>Quantity:</label>
        <input
          type="number"
          name="qty"
          min={0}
          max={99}
          value={itemInfo.qty}
          onChange={changeQty}
        />
      </div>
      <Button size="sm" block variant="outline-primary">
        Add to cart
      </Button>
    </div>
  );
};
