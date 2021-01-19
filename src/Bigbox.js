import React from 'react';
import Smalbox from './Smalbox';
import './Bigbox.css';
import { ImgProvider } from './ImageContext';

function Bigbox() {
    return (
        <div className="bigbox">
            <h2>BigBox</h2>
            <ImgProvider>
                <Smalbox/>
            </ImgProvider>
        </div>
    )
}

export default Bigbox;
