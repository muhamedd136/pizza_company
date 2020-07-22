import { emptyCart } from "../../redux/cart/actions";
import { CheckoutItem } from "../../components";
import { Spinner } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import orders from "../../api/orders";
import { connect } from "react-redux";
import "./Checkout.scss";
import { getFailToast, getSuccessToast } from "../../api/utils";

const Checkout = (props) => {
  const { total, cartItems, emptyCart } = props;
  const usertoken = localStorage.getItem("access_token");
  const decoded = usertoken ? JSON.parse(atob(usertoken.split(".")[1])) : null;
  let tmpDetails = {
    details: [],
  };

  const [formInfo, setFormInfo] = useState({
    address: "",
    contact: "",
  });

  const [isLoadingCompleteOrder, setIsLoadingCompleteOrder] = useState(false);
  let requestBody = {
    userId: null,
    details: "",
    created: "",
    total: 0,
    address: "",
    contact: "",
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  const completeOrder = () => {
    if (
      cartItems.length &&
      formInfo.address.length &&
      formInfo.contact.length
    ) {
      setIsLoadingCompleteOrder(true);
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
        address: formInfo.address,
        contact: formInfo.contact,
      };

      orders
        .createOrder(requestBody)
        .then(() => {
          console.log("success");
          emptyCart();
          setFormInfo({
            address: "",
            contact: "",
          });
          getSuccessToast("Order successfuly placed.");
        })
        .catch((error) => console.log(error));
      setIsLoadingCompleteOrder(false);
    } else {
      getFailToast(
        cartItems.length ? "Enter contact details." : "No items in cart."
      );
      return;
    }
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
      <div className="Checkout-footer">
        <div className="Checkout-userInfo">
          <div className="CheckoutForm-group">
            <label className="CheckoutForm-label">Address</label>
            <input
              className="CheckoutForm-input"
              type="text"
              placeholder="Address"
              name="address"
              value={formInfo.address}
              onChange={handleChange}
            />
          </div>
          <div className="CheckoutForm-group">
            <label className="CheckoutForm-label">Contact number</label>
            <input
              className="CheckoutForm-input"
              type="text"
              placeholder="Contact number"
              name="contact"
              value={formInfo.contact}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="Checkout-total">
          <span>DELIVERY: $5 (€{5 * 0.86})</span>
          <span className="Checkout-span">
            BILL: ${total} (€{total * 0.86})
          </span>
          <span>
            TOTAL: ${total + 5} (€{(total + 5) * 0.86})
          </span>
        </div>
      </div>
      <Button onClick={completeOrder} variant="outline-primary" size="lg">
        {isLoadingCompleteOrder ? (
          <Spinner size="sm" animation="border" />
        ) : (
          "Complete order"
        )}
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
