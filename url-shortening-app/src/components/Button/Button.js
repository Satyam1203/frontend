import React from 'react';
import styles from './Button.module.css';

export default function Button(props) {
    return (
        <div>
            <button 
                className={styles.bg} 
                style={{borderRadius:props.radius, padding:props.padding, fontSize: props.font}}
                onClick={props.onClick}
            >
                {props.text}
            </button>
        </div>
    )
}
