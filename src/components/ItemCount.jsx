import { useState, useContext } from "react"
import {cartContext} from '../context/cartContext'

function ItemCount({detail}){

    const { addToCart } = useContext(cartContext)
    const [count, setCount] = useState(1)
    const handleAdd = () => setCount (count + 1)
    const handleSub = () => setCount (count - 1)
    const handleAddToCart = () => addToCart({...detail, qty: count})
    
    return(
        <div> 
            <button onClick={handleAdd}>+</button>
            <button>{count}</button>
            {count > 1 ? (<button onClick={handleSub}>-</button>) : (<button>-</button>) }
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount