import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ManekinForm() {
    const [items, setItems] = useState([]);
    const [user_id, setUserId] = useState();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [content, setContent] = useState();
    const [price, setPrice] = useState();
    const [item_ids, setItemIds] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/items').then((response) => {
            console.log(response);
            setItems(response.data.items);
        });
    }, []);

    const handleSubmit = () => {
        const file = new FormData();
        file.append('user_id', user_id);
        file.append('title', title);
        file.append('content', content);
        file.append('price', price);
        file.append('item_ids', item_ids);
        file.append('image', image[0]);

        axios
            .post('http://localhost:3000/manekins', file, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response);
            });
    };

    const handleChange = (e) => {
        if (item_ids.includes(e.target.value)) {
            setItemIds(item_ids.filter((checkedValue) => checkedValue !== e.target.value));
        } else {
            setItemIds([...item_ids, e.target.value]);
        }
    };

    return (
        <>
            <p>ファイル送信</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ユーザー"
                    onChange={(event) => setUserId(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="タイトル"
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="内容"
                    onChange={(event) => setContent(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="値段"
                    onChange={(event) => setPrice(event.target.value)}
                />
                <input
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={(event) => setImage(event.target.files)}
                />
                <p>
                    現在選択されている値：<b>{item_ids.join('、')}</b>
                </p>
                {items.map((item) => {
                    return (
                        <label key={item.id}>
                            <input type="checkbox" value={item.id} onChange={handleChange} />
                            {item.name}
                        </label>
                    );
                })}
                <button type="submit">送信</button>
            </form>
        </>
    );
}

export default ManekinForm;
