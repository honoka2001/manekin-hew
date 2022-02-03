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
                router.push('/mypage');
            })
            .catch((error) => {
                console.log('registration error', error.response);
                serErrorMessage(error.response.data.errors);
            });
    };

    return (
        <div>
            <p>新規登録</p>
            {error_message}

            <form onSubmit={handleSubmit}>
                <input
                    type="name"
                    name="name"
                    placeholder="ニックネーム"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="確認用パスワード"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />

                <button type="submit">登録</button>
            </form>
        </div>
    );
}
