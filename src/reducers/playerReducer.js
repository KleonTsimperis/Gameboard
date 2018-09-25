const player = (state,action) => {
  if(action.type === "HANDLE_SUBMIT_PLAYER"){
    return [
      ...state,
      {
        name:action.payload.name,
        score:0,
        id:action.payload.id
      }
    ]
  }
  if(action.type === "REMOVE_PLAYER"){
    const removePlayer = state.filter(player => player.id !== action.payload)
    return removePlayer;
  }
  if(action.type === "MODIFY_SCORE"){
    const updatedPlayerScore = state.map(player=>{
      if(player.id === action.payload){
        return {
          ...player,
          score: player.score + action.value
        }
      }
      return player;
    })
    return updatedPlayerScore;
  }
}

const playerReducer = (state = {
  players:[],
  playerName:'',
}, action) => {

  if(action.type === 'MODIFY_SCORE'){
    return state = {
      ...state,
      players:player(state.players,action)
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
      players:player(state.players,action),
      playerName:''
    }
  }
  if(action.type === 'REMOVE_PLAYER'){
    return state = {
      ...state,
      players:player(state.players,action)
    }
  }
  return state;
};


export default playerReducer;
