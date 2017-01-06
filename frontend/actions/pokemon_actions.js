import * as APIUtil from './../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
});

export const receivePokemonErrors = err => ({
  type: RECEIVE_POKEMON_ERRORS,
  err
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestSinglePokemon = id => (dispatch) => {
  return APIUtil.fetchSinglePokemon(id)
    .then(pokemon => dispatch(receiveSinglePokemon(pokemon)));
};

export const dispatchSinglePokemon = poke => (dispatch) => {
  return APIUtil.createSinglePokemon(poke).then(pokemon => {
    dispatch(receiveSinglePokemon(pokemon));
    return pokemon;
  },
    err => dispatch(receivePokemonErrors(err))
  );
};
