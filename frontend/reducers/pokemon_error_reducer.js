import { RECEIVE_POKEMON_ERRORS } from '../actions/pokemon_actions';

const pokemonErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return action.err;
    default:
      return state;
  }
};

export default pokemonErrorReducer;
