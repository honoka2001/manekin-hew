import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import CommentField from '../../components/Manekins/CommentField';

export default function ManekinDetail() {
    const router = useRouter();
    const [manekin, setManekin] = useState([]);
    const [comments, setComments] = useState([]);
    const [commentContent, setCommentContent] = useState('');
    const [user, setUser] = useState([]);
    const [avatar, setAvatar] = useState('');
    const [items, setItems] = useState([]);
    const [manekinImage, setManekinImage] = useState([]);
    const [id, setId] = useState();
    const [isSold, setIsSold] = useState();

    useEffect(() => {
        if (router.asPath !== router.route) {
            setId(router.query.id);
        }
    }, [router]);

    useEffect(() => {
        if (id) {
            getMankeins(id);
        }
    }, [id]);

    const getMankeins = (id) => {
        axios.get(`http://localhost:3000/manekins/${id}`).then((response) => {
            console.log(response.data);
            setManekin(response.data.manekin);
            setComments(response.data.comments);
            setManekinImage(response.data.manekin.image);
            setUser(response.data.user);
            setAvatar(response.data.user.avatar);
            setItems(response.data.items);
            setIsSold(response.data.is_sold);
        });
    };

    const handleSubmit = (e) => {
        axios
            .post(
                `http://localhost:3000/manekins/${manekin.id}/comments`,
                {
                    comment: {
                        comment_content: commentContent,
                        manekin_id: manekin.id,
                    },
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log(res);
                getMankeins(id);
                setCommentContent('');
            });
    };

    return (
        <div className="bg-gray-100">
            <Header />
            <div className=" bg-white flex justify-center w-3/5 container mx-auto pt-16">
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
                    <div>
                        <h2 className="font-semibold">出品者</h2>
                        <div className="flex my-3">
                            <Link href="/user/[id]" as={`/user/${user.id}`}>
                                <a className="flex">
                                    {avatar.url ? (
                                        <img
                                            src={avatar.url}
                                            alt="avatar_image"
                                            className="mx-auto object-cover rounded-full w-12 h-12 hover:opacity-75"
                                        />
                                    ) : (
                                        <img
                                            src="/sample.png"
                                            alt="avatar_image"
                                            className="mx-auto object-cover rounded-full w-12 h-12 hover:opacity-75"
                                        />
                                    )}
                                    <div className="flex-auto ml-3">
                                        <p>{user.name}</p>
                                        <p>{user.height}cm</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold">商品説明</h2>
                        <p className="text-sm mt-3 ml-2">{manekin.content}</p>
                    </div>
                    {isSold ? (
                        <div className="bg-gray-500 font-bold text-white text-xl py-2 w-11/12 rounded my-10 text-center">
                            購入済みのため購入できません
                        </div>
                    ) : (
                        <Link href="/purchase/[id]" as={`/purchase/${manekin.id}`}>
                            <a>
                                <div className="bg-red-500 font-bold text-white text-xl py-2 w-11/12 rounded my-10 text-center">
                                    購入に進む
                                </div>
                            </a>
                        </Link>
                    )}
                    <CommentField
                        manekin_id={manekin.id}
                        comments={comments}
                        commentContent={commentContent}
                        setCommentContent={setCommentContent}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}
