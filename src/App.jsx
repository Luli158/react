import './App.css'
import ItemListContainer from './components/ItemsListContainer'
import NavBar from './components/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
 
  return (
    <>
    <BrowserRouter>
      <NavBar />  
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
