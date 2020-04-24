import React, {useRef, useState, useLayoutEffect} from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.svg';
import Button from '../Button/Button';

export default function Navbar() {
    const [navStatus, updateNavStatus] = useState(0);
    const nav = useRef(null);

    useLayoutEffect(()=>{
        window.addEventListener('resize',()=>{
            // console.log(window.innerWidth);
            if(window.innerWidth>768) nav.current.style.display="flex";
            else nav.current.style.display="none";
        });
    }, []);

    const handleDrawer = ()=>{
        if(navStatus){
            nav.current.style.display="none";
            updateNavStatus(0);
        }else{
            nav.current.style.display="flex";
            updateNavStatus(1);
        }
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.image}>
                <img src={logo} alt="title-logo" height={33}/>
            </div>
            <div className={styles.nav} ref={nav}>
                <div className={styles.links}>
                    <div>Features</div>
                    <div>Pricing</div>
                    <div>Resources</div>
                </div>
                <div className={styles.authLinks}>
                    <div>Login</div>
                    <Button text="Sign Up" />
                </div>
            </div>
            <div className={styles.drawer} onClick={handleDrawer}>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    )
}
