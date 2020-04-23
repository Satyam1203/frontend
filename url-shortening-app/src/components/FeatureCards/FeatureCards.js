import React from 'react';
import styles from './FeatureCards.module.css';
import Card from '../Card/Card';
import svg1 from '../../assets/images/icon-brand-recognition.svg';
import svg2 from '../../assets/images/icon-detailed-records.svg';
import svg3 from '../../assets/images/icon-fully-customizable.svg';

export default function FeatureCards() {
    return (
        <div className={styles.features}>
            <Card 
                margin='0px'
                svg={svg1}
                title={'Brand Recognition'}
                description={'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'}
            />
            <Card 
                margin="40px"
                svg={svg2}
                title={'Detailed Records'}
                description={'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'}
            />
            <Card 
                margin="80px"
                svg={svg3}
                title={'Fully Customizable'}
                description={'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'}
            />
        </div>
    )
}
