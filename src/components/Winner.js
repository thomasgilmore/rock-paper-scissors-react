import React from 'react';
import './winner.css';

export default function Winner(props) {
    return (
        <div className="container">
            <div className="youPickedDiv">
                <h2 className="youPickedTitle">YOU PICKED</h2>
                <div className={props.playersChoice === "rock" ? "rockButtonBorderWinner" : props.playersChoice === "paper" ? "paperButtonBorderWinner" : "scissorButtonBorderWinner"} onClick={null}><button className={props.playersChoice === "rock" ? "rockButtonWinner" : props.playersChoice === "paper" ? "paperButtonWinner" : "scissorButtonWinner"}></button></div>
            </div>
            <div className="theHousePickedDiv">
                <h2 className="theHousePickedTitle">THE HOUSE PICKED</h2>
                <div className={props.computersChoice === "rock" ? "rockButtonBorderWinner" : props.computersChoice === "paper" ? "paperButtonBorderWinner" : "scissorButtonBorderWinner"} onClick={null}><button className={props.computersChoice === "rock" ? "rockButtonWinner" : props.computersChoice === "paper" ? "paperButtonWinner" : "scissorButtonWinner"}></button></div>
            </div>
        </div>
    )
}
