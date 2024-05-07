import { useEffect } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/auth";

function NavbarComponent() {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch, token]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Kampus Merdeka</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  {user?.photo && (
                    <Image
                      src={user.photo}
                      alt="Profile"
                      roundedCircle
                      width={30}
                      height={30}
                      style={{ objectFit: "cover" }}
                    />
                  )}{" "}
                  {user?.name}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location = "/";
                  }}
                  className="text-danger"
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
