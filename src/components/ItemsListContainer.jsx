import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {cartContext} from '../context/cartContext'
import ItemList from './ItemList'
import Loader from './Loader'
import { getItems, getCategoryItems } from "../firebase/db"

function ItemsListContainer() {
    const [items, setItems] = useState([])
    const {id} = useParams(cartContext)

    const value = useContext(cartContext)

    useEffect(() => {
        if(!id) {
            getItems()
            .then(res => setItems(res))
        } else {
        getCategoryItems(id)
            .then(res =>setItems(res))
        }
    }, [id])

    return(
        <>
            {items.length > 0 ? <ItemList items={items} /> : <Loader/>}
        </>
    )
}

export default ItemsListContainer
