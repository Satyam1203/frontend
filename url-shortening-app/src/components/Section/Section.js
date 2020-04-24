import React from 'react';
import styles from './Section.module.css';
// import svg from '../../assets/images/illustration-working.svg';
import Button from '../Button/Button';

export default function Section() {
    return (
        <div className={styles.section}>
            <div className={styles.content}>
                <div className={styles.title}>
                    More than just shorter links
                </div>
                <div className={styles.description}>
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </div>
                <Button padding="12px 25px" text="Get Started"/>
            </div>
            <div className={styles.svg}>
                {/* <img src={svg} alt="svg" width="500px;"/> */}
            </div>
        </div>
    )
}
