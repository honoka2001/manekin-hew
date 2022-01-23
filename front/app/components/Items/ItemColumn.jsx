import React from 'react';
import DeleteButton from './DeleteButton';

function ItemColumn(props) {
    return (
        <li>
            <p>name : {props.name}</p>
            <p>user_id : {props.user_id}</p>
            <img src={props.image} alt="item-image" />
            <br />
            <DeleteButton item={props.item} />
        </li>
    );
}

export default ItemColumn;
