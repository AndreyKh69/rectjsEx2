import { Container, Nav, Navbar, Badge} from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";

interface NavbarProps {
    numberOfProducts: number;
}

export default function StoreNavbar(props: NavbarProps) {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Andrey's Store</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Order">Cart <Badge pill bg="secondary">{props.numberOfProducts}</Badge></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
