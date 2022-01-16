import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import ItemColumn from './ItemColumn';

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
        {items.map((item) => {
          return (
            <ItemColumn
              key={item.id}
              name={item.name}
              image={item.image.url}
            />
          )
        })}
      </ul>
    </div>
  );
}

export default ItemList;
