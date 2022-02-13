import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../../components/Header/Header';
import UserField from '../../components/Users/UserField';
import ManekinCreateButton from '../../components/Users/ManekinCreateButton';
import styles from '../../styles/ManekinList.module.css';
import Link from 'next/link';

export default function ManekinDetail() {
    const router = useRouter();
    const [manekins, setManekins] = useState([]);
    const [user, setUser] = useState([]);
    const [isCurrentUser, setIsCurrentUser] = useState();
    const [id, setId] = useState();

    useEffect(() => {
        if (router.asPath !== router.route) {
            setId(router.query.id);
        }
    }, [router]);

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:3000/users/${id}`, { withCredentials: true })
                .then((response) => {
                    console.log(response.data);
                    setUser(response.data.user);
                    setManekins(response.data.manekins);
                    setIsCurrentUser(response.data.is_current_user);
                });
        }
    }, [id]);

    return (
        <div>
            <Header />
            <UserField user={user} isCurrentUser={isCurrentUser}/>
						{isCurrentUser && <ManekinCreateButton />}
            <div className={styles.container}>
                <h2>出品マネキン</h2>

                <div className={styles.manekin_cards_area}>
                    {manekins?.map((manekin) => {
                        return (
                            <div className={styles.manekin_card} key={manekin.id}>
                                <Link href="/manekin/[id]" as={`/manekin/${manekin.id}`}>
                                    <a>
                                        <img
                                            src={manekin.image.url}
                                            alt="manekin_image"
                                            className={styles.manekin_image}
                                        />
                                    </a>
                                </Link>
                                <p className={styles.manekin_title}>{manekin.title}</p>
                                <p className={styles.manekin_price}>¥ {manekin.price}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
