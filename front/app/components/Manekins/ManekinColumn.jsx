import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ManekinColumn(props) {
    return (
        <div>
            <div className="rounded-2xl bg-white w-64 m-auto p-2">
                <Link href="/manekin/[id]" as={`/manekin/${props.manekin.id}`}>
                    <a>
                        <img
                            src={props.manekin.image.url}
                            alt="manekin_image"
                            className=" p-1 h-60 m-auto object-cover hover:opacity-75"
                        />
                    </a>
                </Link>
                <div className="bg-white-100 m-1 p-1 rounded-lg">
                    <p className="text-gray-700 text-xl ">{props.manekin.title}</p>
                    <p className="text-red-500 text-xl font-bold ">¥ {props.manekin.price}</p>
                </div>
                <Link href="/user/[id]" as={`/user/${props.manekin.user.id}`}>
                    <a>
                        <div className="flex-row gap-2 flex p-1 hover:opacity-75">
                            <div className="flex-shrink-0 ">
                                {props.manekin.user.image ? (
                                    <img
                                        src={props.manekin.user.image.url}
                                        alt="avatar_image"
                                        className="mx-auto object-cover rounded-full h-9 w-9  hover:opacity-75"
                                    />
                                ) : (
                                    <img
                                        src="/sample.png"
                                        alt="avatar_image"
                                        className="mx-auto object-cover rounded-full h-9 w-9  hover:opacity-75"
                                    />
                                )}
                            </div>
                            <div className=" flex flex-col ">
                                <span className="text-gray-600 text-sm">{props.manekin.user.name}</span>
                                <span className="text-gray-400 text-xs">
                                    {props.manekin.user.height}cm
                                </span>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
}
