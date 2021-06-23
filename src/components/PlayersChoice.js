import React from 'react';
import './playerschoice.css';
import backgroundTriangle from '../images/bg-triangle.svg';

export default function PlayersChoice(props) {
    return (
        <div className="playersChoiceDiv">
            <img src={backgroundTriangle} className="backgroundTriangle" alt="backgroundTriangle" />
            <div className="rockButtonBorder"><button className="rockButton"></button></div>
            <div className="paperButtonBorder"><button className="paperButton"></button></div>
            <div className="scissorButtonBorder"><button className="scissorButton"></button></div>
        </div>
    )
}
