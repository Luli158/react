import './styles.css'

function CartWidget() {
    return(
        <div className="cart-widget">
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-count">4</span>
        </div>
    );
}

export default CartWidget;