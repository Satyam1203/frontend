import React from 'react';
import styles from './Main.module.css';
import FeatureCards from "../FeatureCards/FeatureCards";

export default function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.sectionTitle}>Advanced Statistics</div>
            <div className={styles.sectionDesc}>
                Track how your links are performing across the web with our 
                advanced statistics dashboard.
            </div>
            <FeatureCards />
        </div>
    )
}
