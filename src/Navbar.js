import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navbar() {
  return (
    <Container>
      <Button variant="secondary">Test</Button>
          <span>Scooped</span>
          <a href='Login.js'>SIGN IN</a>
          <a href='Login.js'>CREATE ACCOUNT</a>
          <a href='icecream.js'>ICE CREAMS</a>
    </Container>
  )
}

export default Navbar;