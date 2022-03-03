import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function purchase() {
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

    const onClickPurchaseButton = () => {
        axios
            .post(
                'http://localhost:3000/purchases',
                {
                    manekin_id: manekin.id,
                },
                { withCredentials: true }
            )
            .then((response) => {
                console.log(response);
                router.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="bg-gray-100">
            <div className=" bg-white flex justify-center w-3/5 container mx-auto h-screen">
                <div className="flex-auto container mt-4 ml-8">
                    <img
                        src={manekinImage.url}
                        alt="manekin-img"
                        className="w-80 h-96 ml-8 object-contain"
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
                                            className="w-28 h-36 flex-none object-contain"
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
                    <button
                        onClick={onClickPurchaseButton}
                        className="bg-red-500 font-bold text-white text-xl py-2 w-11/12 rounded my-10"
                    >
                        購入
                    </button>
                </div>
            </div>
        </div>
    );
}
