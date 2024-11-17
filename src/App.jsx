import './App.css'
import ItemListContainer from './components/ItemsListContainer'
import NavBar from './components/NavBar'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './components/Cart'

function App() {
 
  return (
    <>
    <BrowserRouter>
      <NavBar />  
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
