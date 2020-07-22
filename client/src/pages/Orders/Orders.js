import React, { useEffect, useState } from "react";
import { OrderCard } from "../../components";
import orders from "../../api/orders";
import "./Orders.scss";

export const Orders = () => {
  const usertoken = localStorage.getItem("access_token");
  const decoded = usertoken ? JSON.parse(atob(usertoken.split(".")[1])) : null;

  const [orderslist, setOrderslist] = useState();

  const getOrders = (id) => {
    orders
      .getOrders(id)
      .then((response) => setOrderslist(response.data.orders))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (usertoken) {
      getOrders(decoded.sub);
    }
  }, []);

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
                  created={order.created}
                  total={order.total}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
