import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
  
function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='container-navbar'>
        <Navbar.Brand as={Link} to='/'>Capsis</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/electronica'>Electronica</Nav.Link>
            <Nav.Link as={Link} to='/category/joyeria'>Joyeria</Nav.Link>
            <Nav.Link as={Link} to="/category/ropa hombre">Ropa Hombre</Nav.Link>
            <Nav.Link as={Link} to="/category/ropa mujer">Ropa Mujer</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget/>
            <Nav.Link href="#deets">Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default NavBar;