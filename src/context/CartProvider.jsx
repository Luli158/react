import { cartContext } from './cartContext'
import { useState } from 'react'

function CartProvider ({children}) {

  const [cart, setCart] = useState([])
  const addToCart = item => setCart ([...cart, item])

  return 
    <cartContext.Provider value={{cart, addToCart}}>
      {children}
    </cartContext.Provider>
}

export default CartProvider