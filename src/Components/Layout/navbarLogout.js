import React, { useEffect, useState } from "react";
import AxisLogo from "../../Images/axis.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAppContext } from "../../Libs/contextLib";

const NavbarLogout = () => {
  //displays the navbar to the users when signed in
  const { userHasAuthenticated } = useAppContext();
  const [owner, setTheOwner] = useState();
  const sessionUser = localStorage.username;

  useEffect(() => {
    getOwner();
  }, []);

  function handleLogout() {
    //logs out the user from the site
    userHasAuthenticated(false);
  }
  async function getOwner() {
    //check who the user is
    let uri = "http://localhost:3000/sites";
    const res = await fetch(uri);
    const sites = await res.json();
    sites.map((site) => {
      if (site.owner === sessionUser) {
        setTheOwner(sessionUser);
      } else {
        return;
      }
    });
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
        {owner === "demouser1" && (
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/1">Devices in Lund</Nav.Link>
            <Nav.Link href="/2">Devices in Malmö</Nav.Link>
          </Nav>
        )}
        {owner === "demouser2" && (
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/3">Devices in Lomma</Nav.Link>
          </Nav>
        )}
        <Nav>
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarLogout;
