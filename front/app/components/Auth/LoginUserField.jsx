import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LoginUserField() {
    const [user, setUser] = useState([]);

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

    return (
        <div>
            <p>ログインユーザー</p>
            <h2>メールアドレス</h2>
            <p>{user.email}</p>
        </div>
    );
}
