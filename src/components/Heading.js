import React from 'react';
import './heading.css';

export default function Heading(props) {
    return (
        <div className="headingDiv">
            <div className="card">
                <img src={props.img} className="logo" />
                <h1 className="score" >{props.score}</h1>
            </div>
        </div>
    )
}
