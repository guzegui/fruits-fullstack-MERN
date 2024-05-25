import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function NavBar() {
  const value = useContext(ThemeContext);
  const variant = value === "dark" ? "dark" : "light";

  return (
    <Navbar bg={value} variant={variant} expand="lg">
      <Container>
        <Navbar.Brand href="/">Fruit App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/new-fruit">
              <Nav.Link>Add Fruit</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/fruit">
              <Nav.Link>All Fruit</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/random-fruit">
              <Nav.Link>Random Fruit</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title="Log In" id="login-dropdown">
              <Form className="px-4 py-3">
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="email@example.com" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Log In
                </Button>
              </Form>
            </NavDropdown>
            <LinkContainer to="/sign-up">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
