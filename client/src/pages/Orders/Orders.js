import { OrderCard } from "../../components";
import orderslist from "./orderslist";
import React from "react";
import "./Orders.scss";

export const Orders = () => {
  return (
    <div className="Orders">
      <h1>Orders</h1>
      <div className="Orders-list">
        {orderslist
          ? orderslist.map((order, index) => {
              return (
                <OrderCard
                  key={index}
                  id={order.id}
                  details={order.details}
                  note={order.note}
                  created={order.created}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
