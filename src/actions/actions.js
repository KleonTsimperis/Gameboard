import * as ActionTypes from '../actiontypes/actiontypes';

export const modifyScore = (value,id) => {
  return {
    type:ActionTypes.MODIFY_SCORE,
    payload:id,
    value
  }
};

export const handleInput = (input) => {
  return {
    type:ActionTypes.HANDLE_INPUT,
    payload:input
  }
};

export const handleSubmitPlayer = (event,name,value) => {
  return {
    type:ActionTypes.HANDLE_SUBMIT_PLAYER,
    payload:{
      name,
      id:value
    }
  }
};

export const removePlayer = (id) => {
  return {
    type:ActionTypes.REMOVE_PLAYER,
    payload:id
  }
};
