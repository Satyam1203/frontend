import React, {useState, useRef} from 'react';
import styles from './InputBox.module.css';
import Button from '../Button/Button';
import axios from 'axios';
import ShortLink from '../ShortLink/ShortLink';

export default function InputBox() {
    const [url, updateUrl] = useState('');
    const [err, updateErr] = useState('');
    const [shortenedUrls, addShortenedUrls] = useState([]);
    const emptyInput = useRef(null);
    const emptyText = useRef(null);

    const linkChangeHandler = (e)=>{
        updateUrl(e.target.value);
        console.log(url);
    }

    const generateShortUrl=()=>{
        if(url==='') {
            emptyInput.current.style.border="1px solid rgb(252, 129, 129)";
            emptyText.current.style.visibility="visible";
            return;
        }
        emptyText.current.style.visibility="hidden";
        axios({
            method: 'POST',
            url: 'https://rel.ink/api/links/',
            data: {
                url
            }
        })
        .then((res)=>{
            updateErr('');
            const shortUrl="https://rel.ink/"+res.data.hashid;
            addShortenedUrls(shortenedUrls.concat({url, shortUrl}));
            console.log(shortenedUrls);
            console.log(res);
            // console.log(res);
        })
        .catch((e)=>{
            if(url !== '') updateErr('Invalid url or No network connection available.');
            // console.log(e);
        })
    }

    return (
        <>
            <div className={styles.inputDiv}>
                <input 
                    type="text"
                    placeholder="Shorten a link here..."
                    id={styles.input}
                    ref={emptyInput}
                    onChange={(e) => linkChangeHandler(e)}
                />
                <Button 
                    text="Shorten It!" 
                    radius="5px" 
                    padding="10px 20px" 
                    style={{textAlign: 'right'}}
                    onClick={generateShortUrl}    
                />
                <p ref={emptyText}>Please add a link</p>
            </div>
            {err}
            {/* <ShortLink url={'x.url'} shortUrl={'x.shortUrl'}/> */}
            {shortenedUrls.length ? 
                shortenedUrls.map((x,i)=>(<ShortLink url={x.url} shortUrl={x.shortUrl} key={i}/>))
            : null}
        </>
    )
}
