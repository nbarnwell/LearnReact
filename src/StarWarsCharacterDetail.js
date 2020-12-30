import React from 'react';

export default class StarWarsCharacterDetail extends React.Component {
    constructor() {
        super();
        this.state = { character: {} };
    }

    componentDidMount() {
        fetch(`https:/swapi.dev/api/people/${this.props.id}`)
            .then(response => response.json())
            .then(data => this.setState({ character: { name: data.name } }));
    }

    render() {
        return (
            <div>
                <h1>{this.state.character.name}</h1>
            </div>
        );
    }
}