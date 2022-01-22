import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import ItemColumn from './ItemColumn';
import handleItemDelete from './DeleteItem';

function ItemList() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/items')
      .then((response) => {
        console.log(response);
        setItems(response.data.items);
      });
  },[]);

  return (
    <div>
      <h1>ItemList</h1>
      <ul>
        {items.map((item, index) => {
          return (
            <>
              <ItemColumn
                key={index}
                name={item.name}
                image={item.image.url}
              />
              <button onClick={() => handleItemDelete(item)}>削除</button>
            </>
            
          )
        })}
      </ul>
    </div>
  );
}

export default ItemList;