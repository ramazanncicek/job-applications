import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function JobNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Jobber</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav fixed="top">
            <NavDropdown title="Jobb the Jobs" id="basic-nav-dropdown">
              <Link to="/add"><NavDropdown.Item href="/add">Add New Apply</NavDropdown.Item></Link>
              <NavDropdown.Item href="/applications">My Applications</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default JobNavbar;
