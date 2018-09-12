import React from 'react';

const Counter = props =>

  <div className="counter">
    <button className="counter-action decrement" onClick={props.decrementScore}> - </button>
    <div className="counter-score">{props.score}</div>
    <button className="counter-action increment" onClick={props.incrementScore}> + </button>
  </div>;

export default Counter;
