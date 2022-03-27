import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function ItemForm() {
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    const handlePreview = (e) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
    };

    const handleSubmit = () => {
        const file = new FormData();
        file.append('item[name]', name);
        file.append('item[image]', image[0]);

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
        <div className="h-screen flex justify-center items-center mx-20 flex-none">
            <div className="py-10 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h2 className="text-3xl font-bold text-gray-700 mb-4 flex justify-center">
                        <span className="px-4 py-2 rounded-full text-white bg-yellow-400 text-sm flex justify-center mr-2">
                            Step1
                        </span>
                        アイテムを作成
                    </h2>
                    <p className="text-center text-sm font-semibold text-gray-700 mb-6">
                        売りたい服、着る予定のない服を登録しよう！
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <img src="/item_form.svg" alt="item_form" className="h-64 mr-8" />

                    <form onSubmit={handleSubmit} className="w-2/5">
                        <p className="text-sm text-gray-700 font-semibold ">アイテムの名前</p>
                        <input
                            type="text"
                            placeholder="アイテムの名前"
                            onChange={(event) => setName(event.target.value)}
                            className="block text-sm mb-3 py-3 px-4 rounded-lg w-full border outline-none border-gray-400 "
                        />

                        <p className="text-sm text-gray-700 font-semibold ">アイテムの写真</p>
                        <div className="border-dashed border-2 border-gray-400 flex flex-col justify-center items-center mb-3">
                            {preview ? (
                                <img
                                    src={preview}
                                    className=" p-1 h-48 w-48 m-auto object-cover "
                                />
                            ) : (
                                <div className="text-gray-900 flex flex-wrap justify-center h-48 w-48">
                                    <img src="/item_icon.svg" alt="item_form" className="" />
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

                        <button
                            type="submit"
                            className="py-2 px-4 w-full text-white bg-red-500 rounded-xl hover:opacity-75"
                        >
                            アイテム作成
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-40 h-40 absolute bg-yellow-300 rounded-full top-0 right-12 hidden md:block"></div>
            <div className="w-20 h-40 absolute bg-yellow-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block z-0"></div>
        </div>
    );
}
