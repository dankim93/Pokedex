import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import merge from 'lodash/merge';
import Root from './components/root';

import { receiveAllPokemon, requestAllPokemon,
  receiveSinglePokemon, requestSinglePokemon,
  dispatchSinglePokemon
  } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import * as APIUtil from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);

  window.store = store;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.merge = merge;

  window.fetchSinglePokemon = APIUtil.fetchSinglePokemon;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.requestSinglePokemon = requestSinglePokemon;

  window.dispatchSinglePokemon = dispatchSinglePokemon;
  window.createSinglePokemon = APIUtil.createSinglePokemon;
});
