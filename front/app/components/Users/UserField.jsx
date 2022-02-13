import React, { useState, useEffect } from 'react';
import styles from '../../styles/UserField.module.css';

export default function UserField(props) {

    return (
        <div>
            <div className={styles.user_area}>
                {props.user.image ? (
                    <img src={props.user.image.url} alt="avatar_image" className={styles.avatar_image} />
                ) : (
                    <img src="/sample.png" alt="avatar_image" className={styles.avatar_image} />
                )}
                <div className={styles.user_text_area}>
                    <p className={styles.user_name}>{props.user.name}</p>
                    <p className={styles.user_height}>{props.user.height}cm</p>
                </div>
                {props.isCurrentUser && <a>編集する</a>}
            </div>
        </div>
    );
}
