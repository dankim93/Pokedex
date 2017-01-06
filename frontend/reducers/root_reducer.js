import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import pokemonDetailReducer from './pokemon_detail_reducer';
import pokemonErrorReducer from './pokemon_error_reducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonDetail: pokemonDetailReducer,
  errors: pokemonErrorReducer
});

export default rootReducer;
