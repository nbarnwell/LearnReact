import React from 'react';

export default class StateTest extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
            name: 'Blech'
        };

        this.onClicked = this.onClicked.bind(this);
    }

    onClicked() {
        this.setState(s => {
            return {
                counter: s.counter + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}: {this.state.counter}</h1>
                <button onClick={this.onClicked}>Increment Counter</button>
            </div>
        );
    }
}