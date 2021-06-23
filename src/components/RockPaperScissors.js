import React, { Component } from 'react';
import Heading from './Heading';
import logo from '../images/logo.svg';
import './rockpaperscissors.css';
import PlayersChoice from './PlayersChoice';
import Rules from './Rules';

export default class RockPaperScissors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        };
    }

    render() {
        return (
            <div>
                <Heading img={logo} score={this.state.score} />
                <PlayersChoice />
                <Rules />
            </div>
        )
    }
}
