import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

const NavHeader = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow-md">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="src/assets/Vinilo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top rounded-full"
              alt="music icon"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/" className="font-semibold">
            Mp3YT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Add your Nav.Link components here */}
            </Nav>
            <Nav>
              <Form.Select className="h-9 pr-10" aria-label="language">
                <option value="1">English</option>
                <option>spanish</option>
                
              </Form.Select>
              <Nav.Link eventKey={2} href="#memes">
                light
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavHeader;
