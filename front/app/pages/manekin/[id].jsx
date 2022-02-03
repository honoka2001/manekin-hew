import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ItemColumn from '../../components/Items/ItemColumn';

export default function ManekinDetail() {
    const router = useRouter();
    const [manekin, setManekin] = useState([]);
    const [user, setUser] = useState([]);
    const [items, setItems] = useState([]);
    const [manekinImage, setManekinImage] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        if (router.asPath !== router.route) {
            setId(router.query.id);
        }
    }, [router]);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3000/manekins/${id}`).then((response) => {
                console.log(response.data);
                setManekin(response.data.manekin);
                setManekinImage(response.data.manekin.image);
                setUser(response.data.user);
                setItems(response.data.items);
                // setItemsImage(response.data.items.image);
            });
        }
    }, [id]);

    return (
        <div className="bg-gray-100">
            <div className=" bg-white flex justify-center w-3/5 container mx-auto">
                <div className="flex-auto container mt-4 ml-8">
                    <img
                        src={manekinImage.url}
                        alt="manekin-img"
                        className="w-80 h-96 border border-gray-400 ml-8"
                    />
                    <div className="mt-8 ml-10">
                        <h2 className="font-semibold">使用アイテム</h2>
                        <ul className="my-6 mx-4">
                            {items.map((item) => {
                                return (
                                    <li key={item.id} className="flex mb-4">
                                        <img
                                            src={item.image.url}
                                            alt="item-img"
                                            className="w-28 h-36 border border-gray-400 flex-none"
                                        />
                                        <p className="my-auto ml-12">{item.name}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex-auto container mx-auto mt-2">
                    <h1 className="font-bold text-2xl my-5">{manekin.title}</h1>
                    <p className="font-semibold text-3xl text-red-500 mb-5">¥ {manekin.price}</p>
                    <div>
                        <h2 className="font-semibold">出品者</h2>
                        <div className="flex my-3">
                            <img
                                src="/sample.png"
                                className="border border-gray-300 rounded-full w-12 h-12 flex-none ml-2"
                            />
                            <div className="flex-auto ml-3">
                                <p>{user.name}</p>
                                <p>{user.height}cm</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold">商品説明</h2>
                        <p className="text-sm mt-3 ml-2">{manekin.content}</p>
                    </div>
                    <button className="bg-red-500 font-bold text-white text-xl py-2 w-11/12 rounded my-10">
                        購入に進む
                    </button>
                    <h2 className="font-semibold text-lg">コメント</h2>
                    <p className="text-gray-600 mt-2 mb-4 ml-6">コメントはまだありません</p>
                    <p className="font-semibold text-gray-600">商品へのコメント</p>
                    <textarea
                        name="comment"
                        cols="100"
                        rows="5"
                        placeholder="コメントする"
                        className="border border-gray-300 w-11/12 rounded-lg"
                    ></textarea>
                    <br />
                    <button className="bg-gray-600 font-bold text-white py-2 w-11/12 rounded my-2">
                        コメントを送信
                    </button>
                </div>
            </div>
        </div>
    );
}
