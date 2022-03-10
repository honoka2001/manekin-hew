import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/editProfile.module.css';
import { useRouter } from 'next/router';

export default function editProfile() {
    const router = useRouter();
    const [user, setUser] = useState([]);
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [height, setHeight] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [preview, setPreview] = useState('');

    useEffect(() => {
        getLoginUser();
    }, []);

    const getLoginUser = () => {
        axios
            .get('http://localhost:3000/login', { withCredentials: true })
            .then((res) => {
                console.log(res);
                setUser(res.data.user);
                setName(res.data.user.name);
                setAvatar(res.data.user.avatar);
                setHeight(res.data.user.height);
                setIntroduction(res.data.user.introduction);
            })
            .catch((data) => {
                console.log(data);
            });
    };

    const handlePreview = (e) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
    };

    const handleSubmit = () => {
        const file = new FormData();
        file.append('name', name);
        file.append('avatar', avatar[0]);
        file.append('height', height);
        file.append('introduction', introduction);

        axios
            .patch(
                `http://localhost:3000/users/${user.id}`,
                file,
                { withCredentials: true },
                {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                }
            )
            .then((response) => {
                console.log(response);
                getLoginUser();
                router.push(`/user/${user.id}`);
            });
    };

    return (
        <div>
            <h1 className={styles.title}>プロフィール設定</h1>
            <div className={styles.image}>
                <h2>画像</h2>
                <div className={styles.iBox}>
                    {preview ? (
                        <img src={preview} className="object-cover rounded-full h-20 w-20" />
                    ) : (
                        <div>
                            {avatar.url ? (
                                <img
                                    src={avatar.url}
                                    alt="avatar_image"
                                    className="object-cover rounded-full h-20 w-20"
                                />
                            ) : (
                                <img
                                    src="/sample.png"
                                    alt="avatar_image"
                                    className="object-cover rounded-full h-20 w-20"
                                />
                            )}
                        </div>
                    )}

                    <label>
                        画像を選択する
                        <input
                            type="file"
                            className={styles.file}
                            onChange={(event) => {
                                setAvatar(event.target.files);
                                handlePreview(event);
                            }}
                        />
                    </label>
                </div>
            </div>
            <div className={styles.nBox}>
                <div className={styles.nickName}>
                    <h2 className={styles.nick}>ニックネーム</h2>
                    <input
                        type="text"
                        name="nickName"
                        value={name}
                        className={styles.name}
                        placeholder="ニックネーム"
                        autoComplete="off"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className={styles.height}>
                    <h2 className={styles.hTitle}>身長</h2>
                    <input
                        type="number"
                        name="height"
                        value={height}
                        className={styles.hInput}
                        autoComplete="off"
                        onChange={(event) => setHeight(event.target.value)}
                    />
                    cm
                </div>
            </div>
            <div className={styles.selfInt}>
                <h2 className={styles.sTitle}>自己紹介</h2>
                <div className={styles.textarea}>
                    <textarea
                        name="txt"
                        value={introduction}
                        className={styles.txt}
                        cols={100}
                        rows={7}
                        maxLength={1000}
                        placeholder="自己紹介を入力してください。"
                        autoComplete="off"
                        onChange={(event) => setIntroduction(event.target.value)}
                    />
                    {/* <p className={styles.length}>0/1000</p> */}
                </div>
            </div>
            <div className={styles.button}>
                <input
                    type="submit"
                    className={styles.update}
                    defaultValue="更新する"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
}
