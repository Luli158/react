import { serverTimestamp } from "firebase/firestore"
import { useCart } from "../context/cartContext"
import { createOrder } from "../firebase/db"

function Cart() {
  const {cart, getTotal} = useCart()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target[0]
    const [name, email, tel]= form
    const order = {
      buyer: {name: name.value, email: email.value, tel: tel.value},
      items: cart,
      date: serverTimestamp(),
      total: getTotal()
    }
    const idOrder = await createOrder(order)
    alert ("Muchas gracias por su compra! El id de su compra es ", idOrder)
  }


  return (
   <div>
    {cart.map(prod => (
      <div key={prod.id}>
        <p>{prod.title}</p>x<p>{prod.qty}</p>
      </div>
    ))}
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="nombre" required/>
        <input type="email" placeholder="email@gmail.com" required/>
        <input type="text" placeholder="telefono" required/>
        <button type="submit">Comprar</button>
      </form>
    </div>
  </div>
  )
}

export default Cart
