import axios from 'axios'

function handleItemDelete(item) {
  axios
    .delete(`http://localhost:3000/items/${item.id}`)
    .then((res) => {
      console.log(res);

    })
    .catch((data) => {
      console.log(data);
    });
}

export default handleItemDelete;