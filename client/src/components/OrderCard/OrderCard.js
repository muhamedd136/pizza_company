import React from "react";
import "./OrderCard.scss";

export const OrderCard = (props) => {
  const { id, details, note, created } = props;
  let date = new Date(created);
  return (
    <div className="OrderCard">
      <div>
        <h4>Order {id}</h4>
        <div className="OrderCard-details">
          {details
            ? details.map((detail, index) => {
                return (
                  <div className="OrderCard-detail" key={id + index}>
                    <span>
                      <strong>Name: </strong>
                      {detail.pizza}{" "}
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
          <strong>Note: </strong>
          {note}
        </div>
        <div className="OrderCard-detail">
          <strong>Date: </strong>
          {date.toLocaleString()}
        </div>
      </div>
    </div>
  );
};
