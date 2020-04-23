import React, {useState} from 'react';
import styles from './InputBox.module.css';
import Button from '../Button/Button';
import axios from 'axios';

export default function InputBox() {
    const [url, updateUrl] = useState('');

    const linkChangeHandler = (e)=>{
        updateUrl(e.target.value);
        console.log(url);
    }

    const generateShortUrl=()=>{
        axios({
            method: 'POST',
            url: 'https://rel.ink/api/links/',
            data: {
                url
            }
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    return (
        <div className={styles.inputDiv}>
            <input 
                type="text"
                placeholder="Shorten a link here..."
                id={styles.input}
                onChange={(e) => linkChangeHandler(e)}
            />
            <Button 
                text="Shorten It!" 
                radius="5px" 
                padding="10px 20px" 
                style={{textAlign: 'right'}}
                onClick={generateShortUrl}    
            />
        </div>
    )
}
