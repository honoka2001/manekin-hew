import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error_message, serErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:3000/login',
                {
                    user: {
                        email: email,
                        password: password,
                    },
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log('login response: ', res);
                router.push('/');
            })
            .catch((error) => {
                console.log('registration error', error);
                serErrorMessage(error.response.data.message);
            });
    };

    return (
        <div className='flex justify-center mt-40'>
            <div>
                <img src="/header_logo.svg" alt="logo" /><br />
                {error_message}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="メールアドレス"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-4'
                    /><br />
                    <input
                        type="password"
                        name="password"
                        placeholder="パスワード"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline'
                    /><br />
                    <button type="submit" className='bg-red-500 font-bold text-white text-xl py-2 w-full rounded my-6'>ログインする</button>
                </form>
                <div className='text-center'>
                    <a href="/auth/registration" className='text-blue-500'>新規登録はこちら</a>
                </div>
            </div>
        </div>
    );
}
