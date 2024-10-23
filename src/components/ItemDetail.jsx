import ItemCount from "./ItemCount"

function ItemDetail ({detail}){
    return(
        <><div>{detail?.title}</div><ItemCount /></>
    )
}

export default ItemDetail

