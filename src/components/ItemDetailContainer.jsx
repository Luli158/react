import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import {getDetail} from "../firebase/db"

function ItemDetailContainer () {
    const [detail, setDetail] = useState()
    const {id} = useParams()

    useEffect(()=>{
        getDetail(id)
            .then(res => setDetail(res)) 
    }, [id])
    return (
        <ItemDetail detail={detail} />
    )
}

export default ItemDetailContainer