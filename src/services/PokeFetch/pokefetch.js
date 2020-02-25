const apiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonNameByIdPromise = (pokemonId) => {
    return new Promise(((resolve, reject) => {
        if (!pokemonId) reject();
        if (pokemonId < 0) reject();
        const url = `${apiUrl}pokemon/${pokemonId}`;
        fetch(url).then(result => {
            result.json().then(data => {
                resolve(data.name);
            })
        });
    }))
};
let getPokemonFrontSpritesByIdPromise = (pokemonId) => {
    return new Promise(((resolve, reject) => {
        if (!pokemonId) reject();
        if (pokemonId < 0) reject();
        const url = `${apiUrl}pokemon/${pokemonId}`;
        fetch(url).then(result => {
            result.json().then(data => {
                resolve(data.sprites.front_default);
            })
        });
    }))
};

export {getPokemonNameByIdPromise, getPokemonFrontSpritesByIdPromise};
