import React, { Component } from 'react';
import Heading from './Heading';
import logo from '../images/logo.svg';
import './rockpaperscissors.css';
import PlayersChoice from './PlayersChoice';
import RulesButton from './RulesButton';
import Rules from './Rules';

export default class RockPaperScissors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            rulesOpen: false
        };
        this.rulesButtonClick = this.rulesButtonClick.bind(this);
        this.closeButtonClick = this.closeButtonClick.bind(this);
    }

    rulesButtonClick() {
        this.state.rulesOpen ? this.setState({ rulesOpen: false }) : this.setState({ rulesOpen: true });
    }

    closeButtonClick() {
        this.setState({ rulesOpen: false });
    }

    render() {
        return (
            <div>
                <Heading img={logo} score={this.state.score} />
                <PlayersChoice />
                <RulesButton rulesButtonClick={this.rulesButtonClick} />
                {this.state.rulesOpen ? <Rules closeButtonClick={this.closeButtonClick} /> : null}
            </div>
        )
    }
}
