import React from 'react';
import { selectAllPokemon } from './../../reducers/selectors';
import PokemonIndexItem from './pokemon_index_item';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
    this.selectAllPokemon = selectAllPokemon;
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    let pokemonItems = this.selectAllPokemon(this.props).map(poke => {
      return (
        <PokemonIndexItem poke={poke} key={poke.id}/>
      );
    });
    return (
      <section className="pokedex">
        <PokemonFormContainer />
        {this.props.children}
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
