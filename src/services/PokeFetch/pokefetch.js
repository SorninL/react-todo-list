const apiUrl = 'https://pokeapi.co/api/v2/';
function getPokemonById(id) {
    if (!id) return;
    if (id < 0) return;
    const url = `${apiUrl}pokemon/${id}`;
    fetch(url).then(result => {
        result.json().then(data => {
            return data.name;

        })
    });
}

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

export {getPokemonById, getPokemonByIdPromise};
