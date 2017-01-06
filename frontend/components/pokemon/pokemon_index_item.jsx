import React from 'react';
import { Link } from 'react-router';

class PokemonIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let urlLink = `/pokemon/${this.props.poke.id}`;
    return (
      <li>
        <Link to={urlLink}>{this.props.poke.name}</Link>
          <img height="30" src={this.props.poke.image_url} />
      </li>
    );
  }
}

export default PokemonIndexItem;
