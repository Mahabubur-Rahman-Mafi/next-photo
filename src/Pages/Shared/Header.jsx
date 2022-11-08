import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../Assets/logo-lg.png";

import "./Shared.css";
import { useContext } from "react";
import { UserAuth } from "../../Auth/AuthContext";

const Header = () => {
  const { user } = useContext(UserAuth);
  console.log(user);
  return (
    <>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link>
              <img
                src={logo}
                width="100"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 text-center menu-section"
              navbarScroll
            >
              <NavLink to="/" className="me-3">
                Home
              </NavLink>
              <NavLink to="/services" className="me-3">
                Services
              </NavLink>
              <NavLink to="/blog">Blog</NavLink>
            </Nav>
            <FaUserCircle />
            <Button className="header-button">Log Out</Button>
            {user?.name}
            <Button className="header-button">Log In</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
