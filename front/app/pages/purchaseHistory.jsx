import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function purchaseHistory() {
    const [manekins, setManekins] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/purchases', { withCredentials: true }).then((response) => {
            console.log(response);
            setManekins(response.data.manekins);
        });
    }, []);

    return (
        <div>
            <div className="min-w-screen min-h-screen bg-white py-5 pt-24">
                <div className=" px-32">
                    <h1 className="text-gray-600 font-semibold mb-2 text-2xl pb-6">購入履歴</h1>

                    {manekins.map((manekin) => {
                        return (
                            <div
                                key={manekin.id}
                                className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6"
                            >
                                <div className="w-full flex items-center">
                                    <img
                                        src={manekin.image.url}
                                        alt="manekin-img"
                                        className="rounded-lg w-20 h-20 object-cover"
                                    />
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-semibold text-gray-600">
                                            {manekin.title}
                                        </h6>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-600 text-xl">
                                            ¥ {manekin.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
