import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

