import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavHeader } from "./components";
import { Menu, Orders } from "./pages";
import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={NavHeader} />
        <Switch>
          <Route path="/orders" component={Orders} />
          <Route path="/" component={Menu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
