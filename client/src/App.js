import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Menu, Orders, Checkout } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavHeader } from "./components";
import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={NavHeader} />
        <ToastContainer />
        <Switch>
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/" component={Menu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
