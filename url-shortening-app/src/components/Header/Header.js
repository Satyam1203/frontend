import React from 'react';
import Navbar from '../Navbar/Navbar';
import InputBox from '../InputBox/InputBox';
import Section from '../Section/Section';

export default function Header() {
    return (
        <div style={{width:'80%', margin:'auto'}}>
            <Navbar />
            <Section />
            <InputBox />
        </div>
    )
}
