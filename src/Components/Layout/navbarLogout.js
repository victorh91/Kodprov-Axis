import React, { useEffect, useState } from "react";
import AxisLogo from "../../Images/axis.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAppContext } from "../../Libs/contextLib";
import { getPositionOfLineAndCharacter } from "typescript";

const NavbarLogout = ({ component }) => {
  //displays the navbar to the users when signed in
  const { userHasAuthenticated } = useAppContext();

  function handleLogout() {
    //logs out the user from the site
    userHasAuthenticated(false);
    localStorage.clear();
  }

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand href="/">
        <img src={AxisLogo} alt="axislogo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {component[0].map((place, index) => (
            <Nav.Link key={index} href={("/", place)}>
              {place}
            </Nav.Link>
          ))}
        </Nav>
        <Nav>
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarLogout;
