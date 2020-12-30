import React from 'react';

export default class StarWarsCharacterDetail extends React.Component {
    constructor() {
        super();
        this.state = { 
            loading: false,
            character: {}
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        setTimeout(() => {
            fetch(`https:/swapi.dev/api/people/${this.props.id}`)
                .then(response => response.json())
                .then(data => this.setState({ loading: false, character: { name: data.name } }));
        }, 1500);
    }

    render() {
        if (this.state.loading) {
            return (<div>Please wait...</div>)
        }

        return (
            <div>
                <h1>{this.state.character.name}</h1>
            </div>
        );
    }
}