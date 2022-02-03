import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ManekinColumn from './ManekinColumn';
import styles from '../../styles/ManekinList.module.css';

export default function ManekinList() {
    const [manekins, setManekins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:3000/manekins').then((response) => {
            console.log(response);
            setManekins(response.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className={styles.container}>
            <h2>新着アイテム</h2>
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <div className={styles.manekin_cards_area}>
                    {manekins?.map((manekin) => {
                        return <ManekinColumn key={manekin.id} manekin={manekin} />;
                    })}
                </div>
            )}
        </div>
    );
}
