import React from 'react';
import './Smalbox.css';
import {useImage} from './ImageContext';

function Smalbox() {
    const imagelink = useImage();
    return (
        <div className="smalbox">
            <h3>Smalbox</h3>
            <img src={imagelink} alt=""/>
        </div>
    )
}

export default Smalbox
