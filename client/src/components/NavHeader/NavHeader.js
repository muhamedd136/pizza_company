import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavHeader.scss";

export const NavHeader = (props) => {
  const [signOutModalShow, setSignOutModalShow] = useState(false);
  const [signInModalShow, setSignInModalShow] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem("access_token") ? true : false
  );

  return (
    <div className="NavHeader">
      <Modal
        show={signInModalShow}
        onHide={() => setSignInModalShow(false)}
        className="signout_modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sign in form</Modal.Body>
        <Modal.Footer>
          <div className="modal-buttons">
            <Button
              size="md"
              variant="outline-secondary"
              onClick={() => {
                setSignInModalShow(false);
              }}
            >
              Cancel
            </Button>
            <Button
              size="md"
              onClick={() => {
                setSignInModalShow(false);
              }}
            >
              Sign in
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal
        show={signOutModalShow}
        onHide={() => setSignOutModalShow(false)}
        className="signout_modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to sign out?</Modal.Body>
        <Modal.Footer>
          <div className="modal-buttons">
            <Button
              size="md"
              variant="outline-secondary"
              onClick={() => {
                setSignOutModalShow(false);
              }}
            >
              No
            </Button>
            <Button
              size="md"
              onClick={() => {
                setSignOutModalShow(false);
                localStorage.removeItem("access_token");
                props.history.push("/");
                window.location.reload();
              }}
            >
              Yes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Navbar collapseOnSelect expand="md">
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navBase">
            {isSignedIn ? (
              <Nav.Link eventKey="2" as={Link} to="/">
                Menu
              </Nav.Link>
            ) : null}
            {isSignedIn ? (
              <Nav.Link eventKey="3" as={Link} to="/orders">
                Orders
              </Nav.Link>
            ) : null}

            <NavDropdown.Divider />
            {isSignedIn ? (
              <Nav.Link
                eventKey="100"
                className="sign_out-mobile"
                onClick={() => {
                  setSignOutModalShow(true);
                  props.history.push("/");
                }}
              >
                Sign out
              </Nav.Link>
            ) : (
              <Nav.Link
                eventKey="100"
                className="sign_out-mobile"
                onClick={() => {
                  setSignInModalShow(true);
                }}
              >
                Sign in
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        {isSignedIn ? (
          <Nav.Link
            className="sign_out-desktop"
            eventKey="101"
            onClick={() => {
              setSignOutModalShow(true);
            }}
          >
            Sign out
          </Nav.Link>
        ) : (
          <Nav.Link
            className="sign_out-desktop"
            eventKey="101"
            onClick={() => {
              setSignInModalShow(true);
            }}
          >
            Sign in
          </Nav.Link>
        )}
      </Navbar>
    </div>
  );
};
