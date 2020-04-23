import React from 'react';
import styles from './Invite.module.css';
import Button from '../../components/Button/Button';

export default function Invite() {
    return (
        <div className={styles.invite}>
            <div className={styles.title}>Boost your links today</div>
            <Button 
                padding="12px 25px"
                text="Get Started"
                font="16px"
            />
        </div>
    )
}
