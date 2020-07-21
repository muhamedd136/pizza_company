import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag-1.svg";
import { toggleShowCart } from "../../redux/cart/actions";
import { connect } from "react-redux";
import React from "react";
import "./CartIcon.scss";

const CartIcon = ({ toggleShowCart }) => {
  return (
    <div className="CartIcon" onClick={toggleShowCart}>
      <ShoppingIcon className="CartIcon-shoppingIcon" />
      <span className="CartIcon-itemCount">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => dispatch(toggleShowCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
