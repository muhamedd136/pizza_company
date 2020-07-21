import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag-1.svg";
import { selectCartItemsCount } from "../../redux/cart/selectors";
import { toggleShowCart } from "../../redux/cart/actions";
import { connect } from "react-redux";
import React from "react";
import "./CartIcon.scss";

const CartIcon = ({ toggleShowCart, itemCount }) => {
  return (
    <div className="CartIcon" onClick={toggleShowCart}>
      <ShoppingIcon className="CartIcon-shoppingIcon" />
      <span className="CartIcon-itemCount">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => dispatch(toggleShowCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
