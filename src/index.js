import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



const playerReducer = (state = {
  players:[{name:'kleon',score:22,id:0},{name:'ange',score:33,id:1}],
  playerName:'',
}, action) => {

  if(action.type === 'MODIFY_SCORE'){
    const updatedPlayerList = state.players.map(player=>{
      if(player.id === action.payload){
        return{
          ...player,
          score:player.score + action.value
        }
      }
      return player;
    });
    return state = {
      ...state,
      players:updatedPlayerList
    }
  }
  if(action.type === 'HANDLE_INPUT'){
    return state = {
      ...state,
      playerName:action.payload
    }
  }
  if(action.type === 'HANDLE_SUBMIT_PLAYER'){
    return state = {
      ...state,
      players:[...state.players,{name:action.payload.name, score:0, id:action.payload.id}],
      playerName:''
    }
  }
  if(action.type === 'REMOVE_PLAYER'){
    const removePlayer = state.players.filter(player=>player.id !== action.payload);
    return state = {
      ...state,
      players:removePlayer
    }
  }
  return state;
}


const store = createStore(combineReducers({playerReducer}),applyMiddleware(logger,thunk));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
