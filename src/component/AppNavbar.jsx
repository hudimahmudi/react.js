import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

export default function AppNavbar() {

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm mb-4">
      <Container>
        <Navbar.Brand href="/Login">Point Of sales</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav className="align-items-center gap-2">
            <Navbar.Text className="text-secondary me-2"> Admin </Navbar.Text>
            <Button variant="outline-danger size=sm">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}