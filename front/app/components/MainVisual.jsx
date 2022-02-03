import React from 'react';
import styles from '../styles/MainVisual.module.css';

export default function MainVisual() {
    return (
        <div className={styles.main_visual}>
            <img src="/main_visual.svg" alt="" width="100%"/>
        </div>
    );
}
