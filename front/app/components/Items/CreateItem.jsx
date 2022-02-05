import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function CreateItem() {
    const [user_id, setUserId] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    const handlePreview = (e) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
    };

    const handleSubmit = () => {
        const file = new FormData();
        file.append('user_id', user_id);
        file.append('name', name);
        file.append('image', image[0]);

        axios
            .post(
                'http://localhost:3000/items',
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

    return (
        <div className='flex justify-center mt-40'>
            <div>
                <p className="font-bold text-4xl text-center">アイテムを作成</p><br />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="ユーザー"
                        onChange={(event) => setUserId(event.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-4'
                    /><br />
                    <input
                        type="text"
                        placeholder="アイテムの名前"
                        onChange={(event) => setName(event.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-4'
                    /><br />
                    <input
                        accept="image/*"
                        multiple
                        type="file"
                        onChange={(event) => {
                            setImage(event.target.files);
                            handlePreview(event);
                        }}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-4'
                    /><br />
                    <img src={preview} /><br />
                    <button type='submit' className='bg-red-500 font-bold text-white text-xl py-2 w-full rounded'>送信</button>
                </form>
            </div>
        </div>
    );
}

export default CreateItem;
