import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {cartContext} from '../context/cartContext'
import ItemList from './ItemList'

function ItemsListContainer() {
    const [items, setItems] = useState([])
    const {id} = useParams(cartContext)

    const value = useContext()

    useEffect(() => {
        const url = 'https://fakestoreapi.com/products'
        const urlCategory = `https://fakestoreapi.com/products/category/${id}`

        fetch(id ? urlCategory : url)
            .then(res => res.json())
            .then(res => setItems(res))
            .catch(err => console.error('Error fetching data:', err))
    }, [id])

    return(
        <ItemList items={items} />
    )
}

export default ItemsListContainer
