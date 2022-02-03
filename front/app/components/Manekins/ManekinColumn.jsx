import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../../styles/ManekinColumn.module.css';
import Link from 'next/link';

export default function ManekinColumn(props) {
    return (
        <div className={styles.manekin_card}>
            <img
                src={props.manekin.image.url}
                alt="manekin_image"
                className={styles.manekin_image}
            />
            <div className={styles.user_area}>
                {props.manekin.user.image ? (
                    <img
                        src={props.manekin.user.image.url}
                        alt="avatar_image"
                        className={styles.avatar_image}
                    />
                ) : (
                    <img src="/sample.png" alt="avatar_image" className={styles.avatar_image} />
                )}
                <div className={styles.user_text_area}>
                    <p className={styles.user_name}>{props.manekin.user.name}</p>
                    {/* <p className={styles.user_height}>{props.user.height}cm</p> */}
                </div>
            </div>
            <p className={styles.manekin_title}>{props.manekin.title}</p>
            <p className={styles.manekin_price}>¥ {props.manekin.price}</p>
        </div>
    );
}