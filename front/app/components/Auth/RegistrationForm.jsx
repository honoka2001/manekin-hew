import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error_message, serErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:3000/signup',
                {
                    user: {
                        name: name,
                        email: email,
                        password: password,
                        password_confirmation: passwordConfirmation,
                    },
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log('registration res', res);
                router.push('/');
            })
            .catch((error) => {
                console.log('registration error', error.response);
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
                        type="name"
                        name="name"
                        placeholder="ニックネーム"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-2'
                    /><br />
                    <input
                        type="email"
                        name="email"
                        placeholder="メールアドレス"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-2'
                    /><br />
                    <input
                        type="password"
                        name="password"
                        placeholder="パスワード"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-2'
                    /><br />
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="確認用パスワード"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        className='border border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline my-2'
                    />

                    <button type="submit"  className='bg-red-500 font-bold text-white text-xl py-2 w-full rounded my-6'>登録</button>
                </form>
                <div className='text-center'>
                    <a href="/auth/login" className='text-blue-500'>こちらからログイン</a>
                </div>
            </div>
        </div>
    );
}
