import {
  removeItem,
  decreaseItemQty,
  addItemQty,
} from "../../redux/cart/actions";
import { connect } from "react-redux";
import "./CheckoutItem.scss";
import React from "react";

const CheckoutItem = (props) => {
  const { item, removeItem, decreaseItemQty, addItemQty } = props;

  return (
    <div className="CheckoutItem">
      <div className="CheckoutItem-imageContainer">
        <img src={item.image} alt="item" />
      </div>
      <span className="CheckoutItem-name">{item.name}</span>
      <span className="CheckoutItem-quantity">
        <div
          className="CheckoutItem-arrow"
          onClick={() => decreaseItemQty(item)}
        >
          &#10094;
        </div>
        <span className="CheckoutItem-value">{item.qty}</span>
        <div className="CheckoutItem-arrow" onClick={() => addItemQty(item)}>
          &#10095;
        </div>
      </span>
      <span className="CheckoutItem-price">${item.price}</span>
      <div className="CheckoutItem-remove" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemQty: (item) => dispatch(addItemQty(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  decreaseItemQty: (item) => dispatch(decreaseItemQty(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
