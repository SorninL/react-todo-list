import React from 'react';
import {getPokemonById,getPokemonByIdPromise} from "../../services/PokeFetch/pokefetch";

class TryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: ''
        }
    }

    static capitalizeName(pokemonName) {
        if (!pokemonName) return;
        const result = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        return result;
    }

    displayPokemon() {
        getPokemonByIdPromise(4).then(pokemonName => {
            const pokeName = TryComponent.capitalizeName(pokemonName);
            this.setState({pokemon: pokeName})
        });
        getPokemonById(4);
    }
    render() {
        return (
            <div>
                <h1 onClick={(e) => this.displayPokemon()}>Try Me</h1>
                <h2>{this.state.pokemon}</h2>
            </div>
        )
    }
}
export default TryComponent;
