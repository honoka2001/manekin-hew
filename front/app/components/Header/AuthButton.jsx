import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

export default function AuthButton() {
    return (
        <div className={styles.btn_area}>
            <Link href="/auth/login">
                <a className={styles.btn_login}>ログイン</a>
            </Link>
            <Link href="/auth/registration">
                <a className={styles.btn_sign_up}>新規登録</a>
            </Link>
        </div>
    );
}
