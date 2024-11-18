import {cartContext} from './cartContext'
import { useState } from 'react'

function CartProvider ({children}) {

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart((cart) => {
      const existingItem = cart.findIndex((prod) => prod.id === item.id)
      if (existingItem !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingItem].qty += item.qty
        return updatedCart
      } else {
        return [...cart, item]
      }
    })
  }

  const clearCart = () => setCart([])

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }

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
    <cartContext.Provider value={{cart, addToCart, clearCart, getQuantity, getTotal, removeFromCart}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider