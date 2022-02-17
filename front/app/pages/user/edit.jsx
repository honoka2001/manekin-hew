import React from 'react';
import { useState } from 'react';

export default function Edit() {
    const [preview, setPreview] = useState();

    const handlePreview = (e) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
    };

    return (
        <div>
            <h1>プロフィール設定</h1>
            <div>
                <h2>画像</h2>
                <div>
                    <img src="/00.jpg" alt="user"/>
                    <label>
                        画像を選択する
                        <input
                            type="file"
                            onChange={(event) => {
                                handlePreview(event);
                            }}    
                        />
                    </label>
                    <img src={preview} />
                </div>
            </div>
            <div>
                <div>
                    <h2>ニックネーム</h2>
                    <input
                        type="text"
                        name="nickName"
                        placeholder="ニックネーム"
                        autoComplete="off"
                    />
                </div>
                <div>
                    <h2>身長</h2>
                    <input type="number" name="height" autoComplete="off" />
                    cm
                </div>
            </div>
            <div>
                <h2>自己紹介</h2>
                <div>
                    <textarea
                        name="txt"
                        cols={100}
                        rows={7}
                        maxLength={1000}
                        onkeyup="ShowLength(value);"
                        placeholder="自己紹介を入力してください。"
                        autoComplete="off"
                        defaultValue={''}
                    />
                    <p>0/1000</p>
                </div>
            </div>
            <div>
                <input type="submit" defaultValue="更新する" />
            </div>
        </div>
    );
}
