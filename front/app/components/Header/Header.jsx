import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/header_logo.svg" width="auto" height="auto" alt="manekin_logo" />
                </Link>
            </div>
            <div className={styles.btn_area}>
                <Link href="/auth">
                    <a className={styles.btn_login}>ログイン</a>
                </Link>
                <Link href="/auth">
                    <a className={styles.btn_sign_up}>新規登録</a>
                </Link>
            </div>
        </div>
    );
}
