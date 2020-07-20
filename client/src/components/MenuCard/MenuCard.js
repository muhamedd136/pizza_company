import React from "react";
import "./MenuCard.scss";
import { Button } from "react-bootstrap";

export const MenuCard = (props) => {
  const { name, price, image, ingredients, id } = props;
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
      <Button size="sm" block variant="outline-primary">
        Add to cart
      </Button>
    </div>
  );
};
