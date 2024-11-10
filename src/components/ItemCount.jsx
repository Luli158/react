import { useState, useContext } from "react"
import {cartContext} from '../context/cartContext'

function ItemCount({detail}){

    const { addToCart } = useContext(cartContext)
    const [count, setCount] = useState()
    const handleAdd = () => setCount (count + 1)
    const handleSub = () => setCount (count - 1)
    const handleAddToCart = () => addToCart({...detail, qty: count})
    
    return(
        <div>
            <p>0</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount