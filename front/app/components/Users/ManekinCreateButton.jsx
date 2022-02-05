import React from 'react';
import Link from 'next/dist/client/link';
import styles from '../../styles/ManekinCreateButton.module.css'

export default function ManekinCreateButton() {
    return (
        <div className={styles.container}>
            <Link href="/manekin/createForm">
                <a>
                    <button className={styles.btn_create}>
                        出品
                    </button>
                </a>
            </Link>
        </div>
    );
}
