import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function JobNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Jobber</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav fixed="top">
            <NavDropdown title="Jobb the Jobs" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Add New Apply</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Applications</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default JobNavbar;
