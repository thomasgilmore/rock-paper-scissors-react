import React from 'react';
import './playerschoice.css';
import backgroundTriangle from '../images/bg-triangle.svg';

export default function PlayersChoice(props) {
    return (
        <div>
            <img src={backgroundTriangle} className="backgroundTriangle" alt="backgroundTriangle" />
            <div className="rockButtonBorder"><button className="rockButton"></button></div>
        </div>
    )
}
