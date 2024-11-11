import './styles.css'
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';

function CartWidget() {
    const { getQuantity } = useContext(cartContext)
    return(
        
        <div className="cart-widget">
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-count">{ getQuantity() }</span>
        </div>
    );
}

export default CartWidget