import { selectCartItems } from "../../redux/cart/selectors";
import { toggleShowCart } from "../../redux/cart/actions";
import { CartItem } from "../CartItem/CartItem";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./CartDropdown.scss";
import React from "react";

const CartDropdown = (props) => {
  const { cartItems, toggleShowCart } = props;
  return (
    <div className="CartDropdown">
      {cartItems.length ? (
        <div className="CartDropdown-items">
          {cartItems.length
            ? cartItems.map((cartItem, index) => {
                return <CartItem key={index} item={cartItem} />;
              })
            : null}
        </div>
      ) : (
        <span className="CartDropdown-emptyMessage">Your cart is empty</span>
      )}

      <Button
        size="lg"
        variant="outline-primary"
        block
        onClick={() => {
          props.history.push("/checkout");
          toggleShowCart();
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => dispatch(toggleShowCart()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
