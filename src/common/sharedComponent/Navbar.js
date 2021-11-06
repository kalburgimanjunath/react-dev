import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown ';

export default function Navbar() {
  const navitem = [
    'Home',
    'Reading List',
    'Listings',
    'Podcasts',
    'Videos',
    'Tags',
    'FAQ',
    'DEV Shop',
    'Sponsors',
    'About',
    'Contact',
  ];

  return (
    <div>
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navitem.map((item) => {
                return <Nav.Link href={item}>{item}</Nav.Link>;
              })}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Nav defaultActiveKey="/home" className="flex-column">
        {navitem.map((item) => {
          return (
            <Nav.Link eventKey={item} href={item}>
              {item}
            </Nav.Link>
          );
        })}
      </Nav>
    </div>
  );
}
