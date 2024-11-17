import { serverTimestamp } from "firebase/firestore"
import { useCart } from "../context/cartContext"
import { createOrder } from "../firebase/db"
import swal from "sweetalert"

function Cart() {
  const { cart, getTotal, clearCart } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const name = form[0].value
    const email = form[1].value
    const tel = form[2].value

    const order = {
      buyer: { name, email, tel },
      items: cart,
      date: serverTimestamp(),
      total: getTotal(),
    }

    try {
      const idOrder = await createOrder(order)
      swal("Muchas gracias por su compra!", `El id de su compra es ${idOrder}`, "success")
      clearCart()
    } catch (error) {
      swal("Error", "Hubo un problema al procesar tu orden, por favor intenta nuevamente.", "error")
    }
  }

  return (
    <div>
    {cart.length === 0 ? (
      <p>El carrito está vacío</p>
    ) : (
      <>
        {cart.map((prod) => (
          <div key={prod.id}>
            <p>{prod.title}</p>x<p>{prod.qty}</p>
          </div>
        ))}
        <div>
          <button onClick={clearCart} style={{ marginBottom: "10px" }}>
            Vaciar carrito
          </button>
        </div>
      </>
    )}
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="nombre" required />
        <input type="email" placeholder="email@gmail.com" required />
        <input type="text" placeholder="telefono" required />
        <button type="submit">Comprar</button>
      </form>
    </div>
  </div>
  )
}

export default Cart
