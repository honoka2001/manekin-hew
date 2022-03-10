import React, { useState, useEffect } from 'react';
import styles from '../../styles/UserField.module.css';
import Link from 'next/link';

export default function UserField(props) {
    return (
        <div>
            <div className={styles.user_area}>
                {props.avatar ? (
                    <img
                        src={props.user.avatar.url}
                        alt="avatar_image"
                        className={styles.avatar_image}
                    />
                ) : (
                    <img src="/sample.png" alt="avatar_image" className={styles.avatar_image} />
                )}
                <div className={styles.user_text_area}>
                    <p className={styles.user_name}>{props.user.name}</p>
                    {props.user.height && (
                        <p className={styles.user_height}>{props.user.height}cm</p>
                    )}
                </div>
                {props.isCurrentUser && (
                    <Link href="/editProfile">
                        <a>編集する</a>
                    </Link>
                )}
            </div>
        </div>
    );
}
