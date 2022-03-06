import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../../components/Header/Header';

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
        <div>
            <Header />
            <div className="min-w-screen min-h-screen bg-white py-5 pt-24">
                <div className=" px-32">
                    <h1 className="text-gray-600 font-semibold mb-2 ml-1 text-2xl pb-6">
                        購入内容の確認
                    </h1>
                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-7/12 lg:pr-10">
                            <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                <div className="w-full flex items-center">
                                    <img
                                        src={manekinImage.url}
                                        alt="manekin-img"
                                        className="rounded-lg w-20 h-20 object-cover"
                                    />
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-semibold text-gray-600">{manekin.title}</h6>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-600 text-xl">
                                            ¥ {manekin.price}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                <div className="w-full flex mb-3 items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">商品代金</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold">¥ {manekin.price}</span>
                                    </div>
                                </div>
                                <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">決済手数料</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold">¥ 0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">合計</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold">¥ {manekin.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-5/12">
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                <div className="w-full p-3 border-b border-gray-200">
                                    <h2 className="text-gray-600 font-semibold mb-2 ml-1">
                                        支払い方法
                                    </h2>
                                    <div className="mb-5">
                                        <label for="type1" className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-indigo-500"
                                                name="type"
                                                id="type1"
                                                checked
                                            />
                                            <img src="" alt="" />
                                            クレジットカード
                                        </label>
                                    </div>
                                    <div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                                                カード番号
                                            </label>
                                            <div>
                                                <input
                                                    className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                                    placeholder="0000 0000 0000 0000"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                                                有効期限
                                            </label>
                                            <div>
                                                <input
                                                    className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                                    placeholder="MMYY"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                                                セキュリティコード
                                            </label>
                                            <div>
                                                <input
                                                    className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                                    placeholder="3桁または4桁の番号"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-3">
                                    <label for="type2" className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            className="form-radio h-5 w-5 text-indigo-500"
                                            name="type"
                                            id="type2"
                                        />
                                        コンビニ/ATM払い (手数料 ¥100)
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={onClickPurchaseButton}
                                    className="bg-red-500 font-bold text-white text-xl py-2 w-full rounded-lg hover:bg-red-700"
                                >
                                    購入する
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
