import React from 'react';
import Stats from './Stats';
import StopWatch from './StopWatch';

const Header = props =>

  <div className="header">
    <Stats players={props.players} totalPoints={props.totalPoints}/>
    <h1>Scoreboard</h1>
    <StopWatch
      running={props.running}
      onStart={props.onStart}
      onStop={props.onStop}
      elapsedTime={props.elapsedTime}
      onReset={props.onReset}
    />
  </div>;

export default Header;
