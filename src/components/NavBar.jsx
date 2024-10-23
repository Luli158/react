import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='container-navbar'>
        <Navbar.Brand as={Link} to='/'>Capsis</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/electronics'>Electronica</Nav.Link>
            <Nav.Link as={Link} to='/category/jewelery'>Joyeria</Nav.Link>
            <Nav.Link as={Link} to="/category/men's clothing">Ropa Hombre</Nav.Link>
            <Nav.Link as={Link} to="/category/women's clothing">Ropa Mujer</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default NavBar;