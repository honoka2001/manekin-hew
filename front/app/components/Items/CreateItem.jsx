import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function CreateItem() {
    const [user_id, setUserId] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();

    const handleSubmit = () => {
        const file = new FormData();
        file.append('user_id', user_id);
        file.append('name', name);
        file.append('image', image[0]);

        axios
            .post('http://localhost:3000/items', file, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <>
            <p>ファイル送信</p>
            <input
                type="text"
                placeholder="ユーザー"
                onChange={(event) => setUserId(event.target.value)}
            />
            <input
                type="text"
                placeholder="アイテムの名前"
                onChange={(event) => setName(event.target.value)}
            />
            <input
                accept="image/*"
                multiple
                type="file"
                onChange={(event) => setImage(event.target.files)}
            />
            <button onClick={handleSubmit}>送信</button>
        </>
    );
}

export default CreateItem;
