import './App.css'
import ItemListContainer from './components/ItemsListContainer'
import NavBar from './components/NavBar'
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
 
  return (
    <>
      <NavBar />
      <ItemListContainer texto="Aca se mostraran el contenido de la pagina"/>
    </>
  )
}

export default App
