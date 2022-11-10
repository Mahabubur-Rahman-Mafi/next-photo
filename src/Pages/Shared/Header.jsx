import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../Assets/logo-lg.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Shared.css";
import { useContext } from "react";
import { UserAuth } from "../../Auth/AuthContext";
import { Dropdown, Image } from "react-bootstrap";

const Header = () => {
  const { user, logOutUser } = useContext(UserAuth);
  const placement = "left";
  const logoutControl = () => {
    logOutUser()
      .then()
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to='/'>
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
            {user?.uid ? (
              <>
                {user?.photoURL ? (
                  <>
                    <OverlayTrigger
                      key={placement}
                      placement={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          {user?.displayName}
                        </Tooltip>
                      }
                    >
                      {/* dropdwon section  */}
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="none"
                          className="p-0"
                          id="dropdown-basic"
                        >
                          <Button variant="none" className="p-0">
                            <Image
                              src={user.photoURL}
                              width="40px"
                              height="40px"
                              roundedCircle
                            />
                          </Button>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="tex-design">
                          <Dropdown.Item>
                            <Link to="/profile">Profile</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="/review">My Review</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="/addservice">Add Service</Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* ___ */}
                    </OverlayTrigger>
                  </>
                ) : (
                  <>
                    <OverlayTrigger
                      key={placement}
                      placement={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          {user?.displayName}
                        </Tooltip>
                      }
                    >
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="none"
                          className="p-0"
                          id="dropdown-basic"
                        >
                          <Button variant="none">
                            <FaUserCircle className=" p-0 fs-2" />
                          </Button>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="tex-design">
                          <Dropdown.Item>
                            <Link to="/profile">Profile</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="/review">My Review</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="/addservice">Add Service</Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </OverlayTrigger>
                  </>
                )}
                <Button className="header-button" onClick={logoutControl}>
                  Log Out
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="header-button">Log In</Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
