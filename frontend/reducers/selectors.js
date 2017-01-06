import merge from 'lodash/merge';

export const selectAllPokemon = state => {
  let pokemon = merge({}, state.pokemon);

  let result = [];
  for (let id in pokemon) {
    result.push(pokemon[id]);
  }
  return result;
};

export const selectPokemonItem = (state, itemId) => {
  let items = state.pokemonDetail.items;

  for (var i = 0; i < items.length; i++) {
    if (items[i].id === +itemId) {
      return items[i];
    }
  }
};
