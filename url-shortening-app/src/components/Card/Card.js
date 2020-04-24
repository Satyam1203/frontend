import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
    return (
        <div className={styles.card} style={{marginTop:props.margin}}>
            <div className={styles.iconParent}>
                <div className={styles.icon}>
                    <img src={props.svg} alt="icon"/>
                </div>
            </div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
        </div>
    )
}
