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
                router.push('/mypage');
            })
            .catch((error) => {
                console.log('registration error', error);
                serErrorMessage(error.response.data.errors);
            });
    };

    return (
        <div>
            <p>ログイン</p>
            {error_message}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">ログインする</button>
            </form>
        </div>
    );
}
