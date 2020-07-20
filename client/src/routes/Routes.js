import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NavHeader } from "../components/index";
import "react-toastify/dist/ReactToastify.css";
import { Menu, Orders } from "../pages";
import React from "react";

const Routes = () => {
  return (
    <div>
      <Route component={NavHeader} />
      <ToastContainer />
      <div className="container">
        <Switch>
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/" component={Menu} />
        </Switch>
      </div>
    </div>
  );
};

export default Routes;
