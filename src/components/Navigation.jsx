import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link> */}
          <NavLink
            to="/"
            className="nav-link"
            exact
            activeStyle={{
              fontWeight: '500',
              color: '#5e5e5e',
            }}
          >
            Homepage
          </NavLink>
          {/* </Nav.Link> */}
          <NavLink
            to="/about"
            exact
            activeStyle={{
              fontWeight: '500',
              color: '#5e5e5e',
            }}
            className="nav-link"
          >
            About me
          </NavLink>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
