import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import MainVisual from '../components/MainVisual';
import ManekinList from '../components/Manekins/ManekinList';

export default function Home() {
    return (
        <div>
            <Header />
            <MainVisual />
            <ManekinList />
            <div className={styles.footer}>footer</div>
        </div>
    );
}
