import './styles.css'
import {useCart} from "../context/cartContext"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function CartWidget() {
    const {cart} = useCart()
    const { getQuantity } = useCart()
    return(
        
        <Button as={Link} to="./Cart" className="cart-widget">
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-count">{ getQuantity() }</span>
        </Button>
        
    );
}

export default CartWidget