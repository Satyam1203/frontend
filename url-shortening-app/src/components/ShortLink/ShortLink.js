import React, {useRef} from 'react';
import Button from '../Button/Button';
import styles from './ShortLink.module.css';

export default function ShortLink(props) {
    const text = useRef(null);
    const copied = useRef(null);

    const copyToClipboard = (e) => {
        text.current.select();
        copied.current.innerText="Copied!";
        copied.current.style.backgroundColor="hsl(257, 27%, 26%)";
        document.execCommand('copy');
        e.target.focus();
    };

    return (
        <div className={styles.block}>
            <div className={styles.url}>{props.url}</div>
            <div className={styles.copy}>
                <input 
                    className={styles.shortUrl} 
                    ref={text} 
                    value={props.shortUrl} 
                    onChange={()=>{return}}
                    onClick={()=>false}
                />
                <Button 
                    text="Copy"
                    padding="10px 25px"
                    radius="5px"
                    width="100%"
                    parentWidth="100%"
                    onClick={copyToClipboard}
                    ref={copied}
                />
            </div>
        </div>
    )
}
