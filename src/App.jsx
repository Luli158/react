import './App.css'
import ItemListContainer from './components/ItemsListContainer'
import NavBar from './components/NavBar'
import '@fortawesome/fontawesome-free/css/all.min.css'
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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
