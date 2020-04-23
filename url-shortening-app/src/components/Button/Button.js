import React from 'react';
import styles from './Button.module.css';

const Button=React.forwardRef((props, ref)=> {
    return (
        <div>
            <button 
                className={styles.bg} 
                style={{borderRadius:props.radius, padding:props.padding, fontSize: props.font, width: props.width}}
                onClick={props.onClick}
                ref={ref}
            >
                {props.text}
            </button>
        </div>
    )
})
export default Button;