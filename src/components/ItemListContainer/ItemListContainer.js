import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemListContainer/ItemListContainer.css';


function ItemListContainer(props) {
    
    const onAdd = (cantidad) => {
        console.log(`se han comprado ${cantidad} unidades!`);
    }

    return(
        <div className='itemList-container'>
            <h2>{props.greeting}</h2>
            <div>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemListContainer;