import React from 'react';
import {getPokemonByIdPromise} from "../../services/PokeFetch/pokefetch";

class TryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: 'No Pokemon selected',
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static capitalizeName(pokemonName) {
        if (!pokemonName) return;
        return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    }

    handleSubmit(event) {
        getPokemonByIdPromise(this.state.value).then(pokemonName => {
            const pokeName = TryComponent.capitalizeName(pokemonName);
            this.setState({pokemon: pokeName})
        });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Enter Pokemon ID :</p>
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="This one !"/>
                </form>
                <h2>{this.state.pokemon}</h2>
            </div>
        )
    }
}
export default TryComponent;
