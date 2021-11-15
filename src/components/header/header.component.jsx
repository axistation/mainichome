import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import Logo from "../../assets/logo.svg";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Sidebar from "../../components/sidebar/sidebar.component";

const Header = () => (
  <Navbar className="px-4" bg="light" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand>
        <Link className="logo-container" to="/">
          <img src={Logo} alt="logo" height="24" />
          <span className="px-2">mainichome</span>
        </Link>
      </Navbar.Brand>

      <Nav className="justify-content-end">
        <Sidebar />
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
