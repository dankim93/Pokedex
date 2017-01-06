import React from 'react';
import { withRouter } from 'react-router';

class PokemonForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      attack: '',
      defense: '',
      poke_type: '',
      image_url: '',
      moves: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(property){
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let pokemon = { "pokemon":
      {
        name: this.state.name,
        attack: this.state.attack,
        defense: this.state.defense,
        poke_type: this.state.poke_type,
        image_url: this.state.image_url,
        moves: ["eat", "sleep"]
      }
    };
    this.props.dispatchSinglePokemon(
      pokemon
    ).then((poke) => {
      this.props.router.push(`pokemon/${poke.id}`);
    });
  }

  render(){
    let errors;
    if (this.props.err.responseJSON) {
      errors = this.props.err.responseJSON.map(err => {
        return (<li>{err}</li>);
      });
    }

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Name: <input value={this.state.name} onChange={this.handleInput('name')} />
          Attack: <input value={this.state.attack} onChange={this.handleInput('attack')} />
          Defense: <input value={this.state.defense} onChange={this.handleInput('defense')} />
          Poke Type: <input value={this.state.poke_type} onChange={this.handleInput('poke_type')} />
          Moves: <input value={this.state.moves} onChange={this.handleInput('moves')} />
          Image Url: <input value={this.state.image_url} onChange={this.handleInput('image_url')} />
        <button>Create!</button>
        </form>
        {errors}
      </div>
    );
  }
}

export default withRouter(PokemonForm);
