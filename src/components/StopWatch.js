import React from 'react';

const StopWatch = props => {
  let seconds = Math.floor(props.elapsedTime / 1000);
  return(
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div className="stopwatch-time">{seconds}</div>
      {props.running ?
         <button onClick={props.onStop}>Stop</button>
         :
         <button onClick={props.onStart}>Start</button>
      }
      <button onClick={props.onReset}>Reset</button>
    </div>
  );
};




export default StopWatch;
