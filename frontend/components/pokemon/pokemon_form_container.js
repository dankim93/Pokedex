import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { dispatchSinglePokemon } from './../../actions/pokemon_actions';

const mapStateToProps = state => ({
  err: state.errors
});

const mapDispatchToProps = dispatch => ({
  dispatchSinglePokemon: (poke) => dispatch(dispatchSinglePokemon(poke))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);
