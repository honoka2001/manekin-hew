import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../../components/Header/Header';
import Link from 'next/link';

export default function ManekinDetail() {
    const router = useRouter();
    const [manekins, setManekins] = useState([]);
    const [user, setUser] = useState([]);
    const [avatar, setAvatar] = useState([]);
    const [isCurrentUser, setIsCurrentUser] = useState();
    const [id, setId] = useState();

    useEffect(() => {
        if (router.asPath !== router.route) {
            setId(router.query.id);
        }
    }, [router]);

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:3000/users/${id}`, { withCredentials: true })
                .then((response) => {
                    console.log(response.data);
                    setUser(response.data.user);
                    setAvatar(response.data.user.avatar);
                    setManekins(response.data.manekins);
                    setIsCurrentUser(response.data.is_current_user);
                });
        }
    }, [id]);

    return (
        <div className=" bg-gray-50 h-screen">
            <Header />
            <div className="pt-14 bg-white">
                <div className="flex justify-start w-2/3 m-auto py-10">
                    <div className="flex flex-col">
                        <div className="mb-3">
                            {avatar.url ? (
                                <img
                                    src={avatar.url}
                                    alt="avatar_image"
                                    className="object-cover rounded-full h-40 w-40"
                                />
                            ) : (
                                <img
                                    src="/sample.png"
                                    alt="avatar_image"
                                    className="object-cover rounded-full h-40 w-40"
                                />
                            )}
                        </div>

                        {isCurrentUser && (
                            <Link href="/editProfile">
                                <a className="rounded-lg border px-2 py-1 text-center bg-gray-500 hover:bg-gray-400 text-white">
                                    プロフィール編集
                                </a>
                            </Link>
                        )}
                    </div>
                    <div className="ml-10 mt-5 w-3/4">
                        <p className="text-gray-700 text-2xl">{user.name}</p>
                        {user.height && <p className=" text-gray-500 text-lg">{user.height}cm</p>}
                        <p className="text-gray-700 mt-4">{user.introduction}</p>
                    </div>
                </div>
            </div>
            <div className=" px-48">
                <h2 className="mt-10 text-xl font-semibold text-gray-700">出品マネキン</h2>

                <div className="grid grid-cols-4 gap-2">
                    {manekins?.map((manekin) => {
                        return (
                            <div key={manekin.id} className="rounded-2xl bg-white w-64 m-auto p-2">
                                <Link href="/manekin/[id]" as={`/manekin/${manekin.id}`}>
                                    <a>
                                        <img
                                            src={manekin.image.url}
                                            alt="manekin_image"
                                            className=" p-1 h-60 m-auto object-cover hover:opacity-75"
                                        />
                                    </a>
                                </Link>
                                <div className="bg-white-100 m-1 p-1 rounded-lg">
                                    <p className="text-gray-700 text-xl ">{manekin.title}</p>
                                    <p className="text-red-500 text-xl font-bold ">
                                        ¥ {manekin.price}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Link href="/manekin/createForm">
                <a>
                    <div className="fixed bottom-5 right-28 w-28 h-28 flex flex-col items-center justify-center text-white font-bold text-xl rounded-full bg-yellow-500 shadow hover:opacity-75">
                        出品
                    </div>
                </a>
            </Link>
        </div>
    );
}
