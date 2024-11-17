import {cartContext} from './cartContext'
import { useState } from 'react'

function CartProvider ({children}) {

  const [cart, setCart] = useState([])
  const addToCart = item => setCart ([...cart, item]) //a lo que hay en el carrito le agrega el item
  const clearCart = () => setCart([])

  const getQuantity = () => {
    const quantity = cart.map( item => item.qty )
    const total = quantity.reduce((acc,current) => acc + current, 0)
    return total
  }

  const getTotal = () => {
    const priceOnly = cart.map( item => item.price*item.qty )
    const total = priceOnly.reduce((acc,current) => acc + current, 0)
    return total
  }

  return (
    <cartContext.Provider value={{cart, addToCart, clearCart, getQuantity, getTotal}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider