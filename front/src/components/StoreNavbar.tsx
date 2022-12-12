import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface NavbarProps {
  numberOfProducts: number;
}

export default function StoreNavbar(props: NavbarProps) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Andrey's & Tal's Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Order">
                Cart{" "}
                <Badge pill bg="secondary">
                  {props.numberOfProducts}
                </Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
