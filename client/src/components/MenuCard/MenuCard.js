import { addItem } from "../../redux/cart/actions";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { connect } from "react-redux";
import "./MenuCard.scss";

const MenuCard = (props) => {
  const { name, price, image, ingredients, id, addItem } = props;

  const [itemInfo, setItemInfo] = useState({
    id: id,
    name: name,
    price: price,
    image: image,
    ingredients: ingredients,
    qty: 1,
  });

  const changeQty = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setItemInfo({
      ...itemInfo,
      [name]: Number(value),
    });
  };

  return (
    <div className="MenuCard">
      <img
        className="MenuCard-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Pizza.png/320px-Pizza.png"
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
          min={1}
          max={99}
          value={Number(itemInfo.qty)}
          onChange={changeQty}
        />
      </div>
      <Button
        size="sm"
        block
        variant="outline-primary"
        onClick={() => {
          addItem(itemInfo);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(MenuCard);
