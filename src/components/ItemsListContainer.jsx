import './styles.css'

function ItemListContainer({ texto }) {
    return(
        <div className="item-list-container">
            <h2>{texto}</h2>
        </div>
    );
}

export default ItemListContainer;