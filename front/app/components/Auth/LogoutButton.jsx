import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function LogoutButton() {
    const [user, setUser] = useState([]);
    const router = useRouter();

    const handleLogoutClick = () => {
        axios
            .delete('http://localhost:3000/logout', { withCredentials: true })
            .then((res) => {
                setUser({});
                router.push('/auth');
            })
            .catch((error) => console.log('ログアウトエラー', error));
    };

    return (
        <div>
            <button onClick={handleLogoutClick}>ログアウト</button>
        </div>
    );
}
