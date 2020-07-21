import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import { CartIcon, CartDropdown } from "../index";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./NavHeader.scss";

const NavHeader = (props) => {
  const { showCart, history } = props;

  const [isSignInFormEmpty, setIsSignInFormEmpty] = useState(true);
  const [isSignUpFormEmpty, setIsSignUpFormEmpty] = useState(true);
  const [signOutModalShow, setSignOutModalShow] = useState(false);
  const [signInModalShow, setSignInModalShow] = useState(false);
  const [signUpModalShow, setSignUpModalShow] = useState(false);
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });
  const [signUpInfo, setSignUpInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem("access_token") ? true : false
  );

  const handleSignInInfoChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setSignInInfo({
      ...signInInfo,
      [name]: value,
    });
  };

  const handleSignUpInfoChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setSignUpInfo({
      ...signUpInfo,
      [name]: value,
    });
  };

  const submitSignInForm = () => {
    if (signInInfo.email.length === 0 && signInInfo.password.length === 0) {
      setIsSignInFormEmpty(true);
      return;
    } else {
      setIsSignInFormEmpty(false);
      setIsLoadingSignIn(true);
      //submit form
      console.log(signInInfo);
      localStorage.setItem("access_token", "aaa");
      window.location.reload();
      setIsLoadingSignIn(false);
      setSignInModalShow(false);
    }
  };

  const submitSignUpForm = () => {
    if (
      signUpInfo.fullName.length === 0 &&
      signUpInfo.email.length === 0 &&
      signUpInfo.password.length === 0
    ) {
      setIsSignUpFormEmpty(true);
      return;
    } else {
      setIsSignUpFormEmpty(false);
      // setIsLoadingSignIn(true);
      //submit form
      console.log(signUpInfo);
      // setIsLoadingSignIn(false);
      setSignUpModalShow(false);
    }
  };

  const signInForm = (
    <form className="Form">
      <div className="Form-group">
        <label className="Form-label">Email</label>
        <input
          className="Form-input"
          type="email"
          placeholder="Email"
          name="email"
          value={signInInfo.email}
          onChange={handleSignInInfoChange}
        />
      </div>
      <div className="Form-group">
        <label className="Form-label">Password</label>
        <input
          className="Form-input"
          type="password"
          placeholder="Password"
          name="password"
          value={signInInfo.password}
          onChange={handleSignInInfoChange}
        />
      </div>
    </form>
  );

  const signUpForm = (
    <form className="Form">
      <div className="Form-group">
        <label className="Form-label">Full name</label>
        <input
          className="Form-input"
          type="text"
          placeholder="Full name"
          name="fullName"
          value={signUpInfo.fullName}
          onChange={handleSignUpInfoChange}
        />
      </div>
      <div className="Form-group">
        <label className="Form-label">Email</label>
        <input
          className="Form-input"
          type="email"
          placeholder="Email"
          name="email"
          value={signUpInfo.email}
          onChange={handleSignUpInfoChange}
        />
      </div>
      <div className="Form-group">
        <label className="Form-label">Password</label>
        <input
          className="Form-input"
          type="password"
          placeholder="Password"
          name="password"
          value={signUpInfo.password}
          onChange={handleSignUpInfoChange}
        />
      </div>
    </form>
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
        <Modal.Body>
          {signInForm}
          <div className="SignIn-helptext">
            <span>Don't have an acount?</span>
            <Button
              variant="link"
              onClick={() => {
                setSignInModalShow(false);
                setSignUpModalShow(true);
              }}
            >
              Sign up
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-buttons">
            <Button
              className="Modal-button-secondary"
              size="md"
              variant="outline-secondary"
              onClick={() => {
                setSignInModalShow(false);
              }}
            >
              Cancel
            </Button>
            <Button
              className="Modal-button"
              size="md"
              variant="outline-primary"
              onClick={() => {
                submitSignInForm();
              }}
            >
              Sign in
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal
        show={signUpModalShow}
        onHide={() => setSignUpModalShow(false)}
        className="signout_modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {signUpForm}
          <div className="SignIn-helptext">
            <span>Already have an acount?</span>
            <Button
              variant="link"
              onClick={() => {
                setSignInModalShow(true);
                setSignUpModalShow(false);
              }}
            >
              Sign in
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-buttons">
            <Button
              className="Modal-button-secondary"
              size="md"
              variant="outline-secondary"
              onClick={() => {
                setSignInModalShow(false);
              }}
            >
              Cancel
            </Button>
            <Button
              className="Modal-button"
              size="md"
              variant="outline-primary"
              onClick={() => {
                submitSignUpForm();
              }}
            >
              Sign up
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
              className="Modal-button-secondary"
              size="md"
              variant="outline-secondary"
              onClick={() => {
                setSignOutModalShow(false);
              }}
            >
              No
            </Button>
            <Button
              className="Modal-button"
              size="md"
              variant="outline-primary"
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
            <Nav.Link eventKey="2" as={Link} to="/">
              Menu
            </Nav.Link>
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
        <Nav.Link className="cart-link" eventKey="4">
          <CartIcon />
        </Nav.Link>
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
      {showCart ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = ({ cart: { showCart } }) => ({
  showCart,
});

export default connect(mapStateToProps)(NavHeader);
