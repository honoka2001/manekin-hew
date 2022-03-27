import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function ManekinForm() {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [content, setContent] = useState();
    const [price, setPrice] = useState();
    const [item_ids, setItemIds] = useState([]);
    const [preview, setPreview] = useState();
    const router = useRouter();

    useEffect(() => {
        axios.get('http://localhost:3000/items', { withCredentials: true }).then((response) => {
            console.log(response);
            setItems(response.data.items);
        });
    }, []);

    const handlePreview = (e) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
    };

    const handleSubmit = () => {
        const file = new FormData();
        file.append('manekin[title]', title);
        file.append('manekin[content]', content);
        file.append('manekin[price]', price);
        file.append('manekin[image]', image[0]);
        file.append('item[ids]', item_ids);

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
                router.push('/');
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
        <div className="h-screen flex justify-center items-center mx-20 flex-none">
            {/* アイテム選択ステップ */}
            <div className="mr-20 py-10 px-12 bg-white rounded-2xl shadow-xl z-20 flex-none max-h-screen">
                <div>
                    <h2 className="text-3xl font-bold text-gray-700 mb-4 flex justify-center">
                        <span className="px-4 py-2 rounded-full text-white bg-yellow-400 text-sm flex justify-center mr-2">
                            Step2
                        </span>
                        アイテムを選択
                    </h2>
                    <p className="text-center text-sm font-semibold text-gray-700 mb-6">
                        MANEKIN(コーディネート)に使うアイテムを選択しよう！
                    </p>
                </div>

                <ul className="flex flex-col overflow-y-auto h-96">
                    {items.map((item) => {
                        return (
                            <label
                                key={item.id}
                                className="flex items-center p-1 shadow rounded-md mb-2"
                            >
                                <input
                                    type="checkbox"
                                    value={item.id}
                                    onChange={handleChange}
                                    className="mr-1"
                                />
                                <img src={item.image.url} className="object-cover h-28 w-28 mx-4" />
                                <p>{item.name}</p>
                            </label>
                        );
                    })}
                </ul>
            </div>

            {/* マネキン作成ステップ */}
            <div className="mr-20 py-10 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h2 className="text-3xl font-bold text-gray-700 mb-4 flex justify-center">
                        <span className="px-4 py-2 rounded-full text-white bg-yellow-400 text-sm flex justify-center mr-2">
                            Step3
                        </span>
                        マネキンを作成
                    </h2>
                    <p className="text-center text-sm font-semibold text-gray-700 mb-6">
                        マネキンを出品しよう！
                    </p>
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <div className="">
                            <p className="text-sm font-semibold text-gray-700">マネキンの写真</p>
                            <div className="border-dashed border-2 border-gray-400 flex flex-col justify-center items-center mb-3">
                                {preview ? (
                                    <img
                                        src={preview}
                                        className=" p-1 m-auto object-cover w-64 h-96"
                                    />
                                ) : (
                                    <div className="font-semibold text-gray-900 flex flex-wrap justify-center w-64 h-96">
                                        <img src="/manekin_form.svg" alt="item_form" />
                                    </div>
                                )}
                                <input
                                    accept="image/*"
                                    multiple
                                    type="file"
                                    onChange={(event) => {
                                        setImage(event.target.files);
                                        handlePreview(event);
                                    }}
                                    className="block text-sm py-3 px-4 rounded-lg w-full"
                                />
                            </div>
                        </div>
                        <div className="ml-8 w-96">
                            <p className="text-sm font-semibold text-gray-700">マネキンの商品名</p>
                            <input
                                type="text"
                                placeholder="マネキンの商品名"
                                onChange={(event) => setTitle(event.target.value)}
                                className="block text-sm mb-3 py-3 px-4 rounded-lg w-full border outline-none border-gray-400 "
                            />

                            <p className="text-sm font-semibold text-gray-700">商品詳細</p>
                            <textarea
                                type="text"
                                placeholder="商品詳細"
                                onChange={(event) => setContent(event.target.value)}
                                className="block text-sm mb-3 py-3 px-4 rounded-lg w-full border outline-none border-gray-400 h-52"
                            ></textarea>

                            <p className="text-sm font-semibold text-gray-700">値段</p>
                            <input
                                type="number"
                                placeholder="値段"
                                onChange={(event) => setPrice(event.target.value)}
                                className="block text-sm mb-3 py-3 px-4 rounded-lg w-full border outline-none border-gray-400 "
                            />
                            <button
                                onClick={handleSubmit}
                                className="py-2 px-4 w-full text-white bg-red-500 rounded-xl hover:opacity-75"
                            >
                                マネキンの出品
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
