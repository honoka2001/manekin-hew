import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function sidebar() {
    const [user, setUser] = useState([]);
    const router = useRouter();
    useEffect(() => {
        getLoginUser();
    }, []);

    const getLoginUser = () => {
        axios
            .get('http://localhost:3000/login', { withCredentials: true })
            .then((res) => {
                console.log(res);
                setUser(res.data.user);
            })
            .catch((data) => {
                console.log(data);
                setUser({});
            });
    };

    const handleLogoutClick = () => {
        axios
            .delete('http://localhost:3000/logout', { withCredentials: true })
            .then((res) => {
                setUser({});
                router.push('/auth/registration');
            })
            .catch((error) => console.log('ログアウトエラー', error));
    };
    return (
        <div class="w-60 bg-white px-1 pt-5">
            <ul className="flex flex-col justify-center ml-8">
                <li>
                    <Link href="/user/[id]" as={`/user/${user.id}`}>
                        <a class="flex space-x-2 mt-8 hover:text-gray-600">
                            <img src="/mypage_icon.svg" width="auto" height="auto" alt="mypage" />
                            <span class="font-semibold text-sm text-gray-700">マイページ</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/manekin/createForm">
                        <a class="flex space-x-2 mt-8 hover:text-gray-600">
                            <img src="/buy_icon.svg" width="auto" height="auto" alt="buy" />
                            <span class="font-semibold text-sm text-gray-700">出品</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/statistic">
                        <a class="flex space-x-2 mt-8 hover:text-gray-600">
                            <img src="/know_icon.svg" width="auto" height="auto" alt="know" />
                            <span class="font-semibold text-sm text-gray-700">MANEKIN利用分析</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/purchaseHistory">
                        <a class="flex space-x-2 mt-8 hover:text-gray-600">
                            <img src="/cart_icon.svg" width="auto" height="auto" alt="cart" />
                            <span class="font-semibold text-sm text-gray-700">購入履歴</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <button
                        class="flex space-x-2 mt-8 hover:text-gray-600"
                        onClick={handleLogoutClick}
                    >
                        <img src="/logout_icon.svg" width="auto" height="auto" alt="logout" />
                        <span class="font-semibold text-sm text-gray-700">ログアウト</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}
