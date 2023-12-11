import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Hotelier</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/customer-list">
                            <Nav.Link>Customer List</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/room-list">
                            <Nav.Link>Room List</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/booking-list">
                            <Nav.Link>Booking</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contactus">
                            <Nav.Link>Contact us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}