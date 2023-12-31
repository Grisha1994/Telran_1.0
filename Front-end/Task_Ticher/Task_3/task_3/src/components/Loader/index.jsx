import React from 'react'
import styles from './style.module.css'

export default function Loader() {

    return (
        <div className={styles.loader_container}>
            <div className={styles.loader_message}>
                <p>Подождите, идет загрузка...</p>
            </div>
        </div>
    );
}
