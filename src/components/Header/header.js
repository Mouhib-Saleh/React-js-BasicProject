import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="store">Store</Nav.Link>
            <Nav.Link href="provider">Provider</Nav.Link>
            <Nav.Link href="404">404</Nav.Link>
          
          
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
