import { Button } from "react-bootstrap";
import "./CartDropdown.scss";
import React from "react";

export const CartDropdown = () => {
  return (
    <div className="CartDropdown">
      <div className="CartDropdown-items">items</div>
      <Button
        size="lg"
        variant="outline-primary"
        block
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};
