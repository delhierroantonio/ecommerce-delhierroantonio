import React from 'react';
import '../ItemListContainer/ItemListContainer.css';

function ItemListContainer(props) {
    return(
        <div className='itemList-container'>
            {props.greeting}
        </div>
    )
}

export default ItemListContainer;