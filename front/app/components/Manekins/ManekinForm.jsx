import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ManekinShow from './ManekinShow';

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
            .post(
                'http://localhost:3000/manekins',
                file,
                { withCredentials: true },
                {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                }
            )
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
        <div className='flex justify-center mt-40'>
            <div>
                <h1 className="font-bold text-4xl text-center">MANEKINを出品</h1><br />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="ユーザー"
                        onChange={(event) => setUserId(event.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-4'
                    /><br />
                    <input
                        type="text"
                        placeholder="タイトル"
                        onChange={(event) => setTitle(event.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-4'
                    /><br />
                    <input
                        type="text"
                        placeholder="内容"
                        onChange={(event) => setContent(event.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-4'
                    /><br />
                    <input
                        type="number"
                        placeholder="値段"
                        onChange={(event) => setPrice(event.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-4'
                    /><br />
                    <input
                        accept="image/*"
                        multiple
                        type="file"
                        onChange={(event) => setImage(event.target.files)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-4'
                    /><br />
                    <p>
                        現在選択されている値：<b>{item_ids.join('、')}</b>
                    </p><br />
                    {items.map((item) => {
                        return (
                            <label key={item.id}>
                                <input type="checkbox" value={item.id} onChange={handleChange} />
                                {item.name}<br />
                            </label>
                        );
                    })}
                    <button type="submit" className='bg-red-500 font-bold text-white text-xl py-2 w-full rounded my-2'>送信</button>
                </form>
            </div>
        </div>
    );
}

export default ManekinForm;
