let nextId = 2;

export function modifyScore (value,id)  {
  return {
    type:"MODIFY_SCORE",
    payload:id,
    value
  }
};

export function handleInput (input)  {
  return {
    type:"HANDLE_INPUT",
    payload:input
  }
};

export function handleSubmitPlayer (event,name,value)  {
  return {
    type:"HANDLE_SUBMIT_PLAYER",
    payload:{
      name,
      id:value
    }
  }
};

export function removePlayer (id)  {
  return {
    type:"REMOVE_PLAYER",
    payload:id
  }
};
