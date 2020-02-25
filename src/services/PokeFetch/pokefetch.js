const apiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonByIdPromise = (pokemonId) => {
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

export {getPokemonByIdPromise};
