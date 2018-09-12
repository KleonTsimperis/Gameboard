import React from 'react';

const AddPlayer = props =>

  <div className="add-player-form">
    <form onSubmit={props.handleSubmitPlayer}>
      <input type="text" onChange={props.handleInput} value={props.playerName} name="playerName"/>
      <input type="submit" value="Add Player"/>
    </form>
  </div>


export default AddPlayer;
