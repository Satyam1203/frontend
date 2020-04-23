import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.svg';
import Button from '../Button/Button';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.image}>
                <img src={logo} alt="title-logo" height={33}/>
            </div>
            <div className={styles.nav}>
                <div className={styles.links}>
                    <div>Features</div>
                    <div>Pricing</div>
                    <div>Resources</div>
                </div>
                <div className={styles.authLinks}>
                    <div>Login</div>
                    <Button text="Sign Up"/>
                </div>
            </div>
        </div>
    )
}
