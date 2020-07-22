import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Menu, Orders, Checkout } from "./pages";
import { NavHeader } from "./components";
import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={NavHeader} />
        <Switch>
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/" component={Menu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
