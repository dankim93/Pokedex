import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Link } from 'react-router';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.pokemonId !== newProps.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  render(){
    let items;
    let moves;
    if (this.props.pokemonDetail.items !== undefined) {
      items = this.props.pokemonDetail.items.map((item, idx) => {
        let urlLink = `/pokemon/${this.props.params.pokemonId}/item/${item.id}`;
        return (
          <Link key={idx} to={urlLink}>
            <img height="50" src={item.image_url} />
          </Link>
        );
      });
      moves = this.props.pokemonDetail.moves.join(", ");
    }

    return (
      <div>
        <h1>{this.props.pokemonDetail.name}</h1>
        <img height="200" src={this.props.pokemonDetail.image_url} />
        <p>Moves: {moves}</p>
        {items}
        {this.props.children}
      </div>
    );
  }
}

export default PokemonDetail;

// let moves = this.props.pokemonDetail.moves.map(move => (
//   <li>{move}</li>
// ));
//
// let items = this.props.pokemonDetail.moves.map(item => {
//   return (
//     <ul>
//       <li>{item.name}</li>
//       <li>{item.price}</li>
//       <li>{item.happiness}</li>
//       <li><img src={item.image_url}/></li>
//     </ul>
//   );
// });
//

// <h1>{this.props.pokemonDetail.name}</h1>
// <ul>
//   <li>Attack: {this.props.pokemonDetail.attack}</li>
//   <li>Defense: {this.props.pokemonDetail.defense}</li>
//   <li><img src={this.props.pokemonDetail.image_url}/></li>
//   <li>
//     Moves:
//
//   </li>
//   <li>Pokemon Type: {this.props.pokemonDetail.poke_type}</li>
//   <li>
//     Items:
//
//   </li>
// </ul>
