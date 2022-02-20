import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/profile.module.css';

export default function Edit() {
    const [user, setUser] = useState([]);
    const [preview, setPreview] = useState();

    useEffect(() => {
        axios
            .get('http://localhost:3000/user/edit', { withCredentials: true })
            .then((res) => {
                console.log(res);
                setUser(res.data.user);
            })
            .catch((data) => {
                console.log(data);
                setUser({});
            });
    }, []);

    const handlePreview = (e) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
    };

    return (
        <div>
            <h1 className={styles.title}>プロフィール設定</h1>
            <div className={styles.image}>
                <h2 className={styles.imgs}>画像</h2>
                <div className={styles.iBox}>
                    {user.image ? (
                        <img
                            src={user.image.url}
                            alt="avatar_image"
                            className={styles.img}
                        />
                    ) : (
                        <img src="/sample.png" alt="avatar_image" className={styles.img} />
                    )}
                    <label>
                        画像を選択する
                        <input
                            type="file"
                            onChange={(event) => {
                                handlePreview(event);
                            }}    
                            className={styles.file}
                        />
                    </label>
                    <img src={preview} />
                </div>
            </div>
            <div className={styles.nBox}>
                <div className={styles.nickName}>
                    <h2 className={styles.nick}>ニックネーム</h2>
                    <input
                        type="text"
                        name="nickName"
                        className={styles.name}
                        placeholder="ニックネーム"
                        autoComplete="off"
                    />
                </div>
                <div className={styles.height}>
                    <h2 className={styles.hTitle}>身長</h2>
                    <input type="number" name="height" className={styles.hInput} autoComplete="off" />
                    cm
                </div>
            </div>
            <div className={styles.selfInt}>
                <h2 className={styles.sTitle}>自己紹介</h2>
                <div className={styles.textarea}>
                    <textarea
                        name="txt"
                        className={styles.txt}
                        cols={100}
                        rows={7}
                        maxLength={1000}
                        onkeyup="ShowLength(value);"
                        placeholder="自己紹介を入力してください。"
                        autoComplete="off"
                        defaultValue={''}
                    />
                    <p className={styles.length}>0/1000</p>
                </div>
            </div>
            <div className={styles.button}>
                <input type="submit" className={styles.update} defaultValue="更新する" />
            </div>
        </div>
    );
}
