import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import AuthButton from './AuthButton';
import LogoutButton from './LogoutButton';
import styles from '../../styles/Header.module.css';

export default function Header() {
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
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/header_logo.svg" width="auto" height="auto" alt="manekin_logo" />
                </Link>
            </div>
            {user ? (
                <div className={styles.login_user_area}>
                    {user.image ? (
                        <img
                            src={user.image.url}
                            alt="avatar_image"
                            className={styles.avatar_image}
                        />
                    ) : (
                        <img src="/sample.png" alt="avatar_image" className={styles.avatar_image} />
                    )}
                    <Link href="/user/[id]" as={`/user/${user.id}`}>
                        <p>{user.name}</p>
                    </Link>
                    <LogoutButton />
                </div>
            ) : (
                <AuthButton />
            )}
        </div>
    );
}
