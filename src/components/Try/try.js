import React from 'react';
import {getPokemonByIdPromise} from "../../services/PokeFetch/pokefetch";

class TryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: '',
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static capitalizeName(pokemonName) {
        if (!pokemonName) return;
        const result = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        return result;
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
                    <input type="submit"/>
                </form>
                <h1 onClick={(e) => this.displayPokemon()}>Try Me</h1>
                <h2>{this.state.pokemon}</h2>
            </div>
        )
    }
}
export default TryComponent;
