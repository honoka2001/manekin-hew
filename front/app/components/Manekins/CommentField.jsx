import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function CommentField(props) {
    return (
        <div>
            <h2 className="font-semibold text-lg">コメント</h2>
            {props.comments ? (
                <ul className="mt-2 mb-4 ml-6">
                    {props.comments.map((comment) => {
                        return (
                            <li key={comment.id} className="flex mb-4">
                                <div>
                                    <Link href="/user/[id]" as={`/user/${comment.user.id}`}>
                                        <a className="flex items-center">
                                            {comment.user.avatar.url ? (
                                                <img
                                                    src={comment.user.avatar.url}
                                                    alt="avatar_image"
                                                    className="mx-auto object-cover rounded-full w-8 h-8 hover:opacity-75"
                                                />
                                            ) : (
                                                <img
                                                    src="/sample.png"
                                                    alt="avatar_image"
                                                    className="mx-auto object-cover rounded-full w-8 h-8 hover:opacity-75"
                                                />
                                            )}
                                            <div className="flex-auto ml-2 text-sm">
                                                <p>{comment.user.name}</p>
                                            </div>
                                        </a>
                                    </Link>
                                    <p className="my-auto ml-12 bg-gray-100 px-5 py-2 rounded-md">
                                        {comment.comment_content}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p className="text-gray-600 mt-2 mb-4 ml-6">コメントはまだありません</p>
            )}

            <p className="font-semibold text-gray-600">商品へのコメント</p>
            <textarea
                onChange={(event) => props.setCommentContent(event.target.value)}
                value={props.commentContent}
                name="comment"
                cols="100"
                rows="5"
                placeholder="コメントする"
                className="border border-gray-300 w-11/12 rounded-lg py-4 px-6"
            ></textarea>
            <br />
            <button
                onClick={props.handleSubmit}
                className="bg-gray-600 font-bold text-white py-2 w-11/12 rounded my-2"
            >
                コメントを送信
            </button>
        </div>
    );
}
