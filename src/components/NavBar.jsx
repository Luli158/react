import './styles.css'
import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <nav className="navbar">
        <div className="logo">
          <h1>Capsis</h1>
        </div>
        <ul className="categorias">
          <li>Sale</li>
          <li>Remeras</li>
          <li>Denim</li>
          <li>Camperas</li>
          <li>Sastreros</li>
          <li>Shorts</li>
        </ul>
        <CartWidget />
      </nav>
    );
  }

  //<Link to='/category/beauty'> beauty </Link>

  
  export default NavBar;