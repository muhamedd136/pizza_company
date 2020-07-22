import { emptyCart } from "../../redux/cart/actions";
import { CheckoutItem } from "../../components";
import { Button } from "react-bootstrap";
import orders from "../../api/orders";
import { connect } from "react-redux";
import React from "react";
import "./Checkout.scss";

const Checkout = (props) => {
  const { total, cartItems, emptyCart } = props;
  const usertoken = localStorage.getItem("access_token");
  const decoded = usertoken ? JSON.parse(atob(usertoken.split(".")[1])) : null;
  let tmpDetails = {
    details: [],
  };

  let requestBody = {
    userId: null,
    details: "",
    created: "",
    total: 0,
  };

  const completeOrder = () => {
    if (cartItems.length) {
      cartItems.forEach((item) => {
        tmpDetails.details = [
          ...tmpDetails.details,
          {
            name: item.name,
            qty: item.qty,
          },
        ];
        requestBody = {
          ...requestBody,
          userId: usertoken ? decoded.sub : null,
          created: new Date().toLocaleString(),
          total: total,
        };
      });

      requestBody = {
        ...requestBody,
        details: JSON.stringify(tmpDetails),
      };

      orders
        .createOrder(requestBody)
        .then(() => console.log("success"))
        .catch((error) => console.log(error));
    } else {
      return;
    }
    emptyCart();
  };

  return (
    <div className="Checkout">
      <div className="Checkout-header">
        <div className="Chekout-headerBlock">
          <span>Image</span>
        </div>
        <div className="Chekout-headerBlock">
          <span>Name</span>
        </div>
        <div className="Chekout-headerBlock">
          <span>Quantity</span>
        </div>
        <div className="Chekout-headerBlock">
          <span>Price</span>
        </div>
        <div className="Chekout-headerBlock">
          <span>Remove</span>
        </div>
      </div>
      <div style={{ width: "100%", overflowY: "scroll" }}>
        {cartItems
          ? cartItems.map((item) => {
              return <CheckoutItem key={item.id} item={item} />;
            })
          : null}
      </div>
      <div className="Checkout-total">
        <span>
          TOTAL: ${total} (€{total * 0.86})
        </span>
      </div>
      <Button onClick={completeOrder} variant="outline-primary" size="lg">
        Complete order
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.cart.cartItems.reduce(
    (totalQty, cartItem) => totalQty + cartItem.qty * cartItem.price,
    0
  ),
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  emptyCart: () => dispatch(emptyCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
