import React from 'react';
import logo from '../../assets/images/logo.svg';
import fb from '../../assets/images/icon-facebook.svg';
import tw from '../../assets/images/icon-twitter.svg';
import pin from '../../assets/images/icon-pinterest.svg';
import insta from '../../assets/images/icon-instagram.svg';
import styles from './FooterLinks.module.css';

export default function FooterLinks() {
    return (
        <div className={styles.footer}>
            <div className={styles.titleLogo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.links}>
                <div className={styles.linkHead}>Features</div>
                <div className={styles.link}>Link Shortening</div>
                <div className={styles.link}>Branded Links</div>
                <div className={styles.link}>Analytics</div>
            </div>
            <div className={styles.links}>
                <div className={styles.linkHead}>Resources</div>
                <div className={styles.link}>Blog</div>
                <div className={styles.link}>Developers</div>
                <div className={styles.link}>Support</div>
            </div>
            <div className={styles.links}>
                <div className={styles.linkHead}>Company</div>
                <div className={styles.link}>About</div>
                <div className={styles.link}>Our Team</div>
                <div className={styles.link}>Careers</div>
                <div className={styles.link}>Contact</div>
            </div>
            <div className={styles.socialLinks}>
                <div><img src={fb} alt="fb" /></div>
                <div><img src={tw} alt="twitter" /></div>
                <div><img src={pin} alt="pinterest" /></div>
                <div><img src={insta} alt="instagram" /></div>
            </div>
        </div>
    )
}