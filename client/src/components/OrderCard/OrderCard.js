import React from "react";
import "./OrderCard.scss";

export const OrderCard = (props) => {
  const { id, details, total, created, address, contact } = props;
  const parsedDetails = JSON.parse(details);
  let date = new Date(created);

  return (
    <div className="OrderCard">
      <div>
        <h4>Order {id}</h4>
        <div className="OrderCard-details">
          {parsedDetails.details
            ? parsedDetails.details.map((detail, index) => {
                return (
                  <div className="OrderCard-detail" key={id + index}>
                    <span>
                      <strong>Name: </strong>
                      {detail.name}{" "}
                    </span>
                    <br />
                    <span>
                      <strong>Quantity: </strong> {detail.qty}
                    </span>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div>
        <div className="OrderCard-detail">
          <strong>Address: </strong>
          {address}
        </div>
        <div className="OrderCard-detail">
          <strong>Contact: </strong>
          {contact}
        </div>
        <div className="OrderCard-detail">
          <strong>Total price: </strong>${total} (€{total * 0.86})
        </div>
        <div className="OrderCard-detail">
          <strong>Date: </strong>
          {date.toLocaleString()}
        </div>
      </div>
    </div>
  );
};
