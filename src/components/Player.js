import React from 'react';
import Counter from './Counter';

const Player = props =>

  <div className="player">
    <div className="player-name">
      <a className="remove-player" onClick={()=>props.removePlayer(props.id)}> x </a>
      {props.name}
    </div>
    <div className="player-score">
      <Counter
       score={props.score}
       modifyScore={(value)=>props.modifyScore(value,props.id)}
       />
    </div>
  </div>

export default Player;
