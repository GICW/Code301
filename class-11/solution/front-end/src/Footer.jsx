import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand> - ITTP @2025</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
