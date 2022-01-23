import axios from 'axios';

export default function DeleteButton(props) {

    const handleItemDelete = () => {
        axios
        .delete(`http://localhost:3000/items/${props.item.id}`, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.log('削除エラー', error));
    };

    return (
        <form onSubmit={handleItemDelete}>
            <button type='submit'>削除</button>
        </form>
    );
}
