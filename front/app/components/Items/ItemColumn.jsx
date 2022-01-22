import React from "react";
import handleItemDelete from "./DeleteItem";

function ItemColumn(props) {
  return (
    <li>
      <p>name : {props.name}</p>
      <img src={props.image} alt="item-image"/>
      <br />
    </li>
  );
}

export default ItemColumn;