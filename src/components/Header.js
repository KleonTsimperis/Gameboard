import React from 'react';
import Stats from './Stats';
import StopWatch from './StopWatch';

const Header = props =>

  <div className="header">
    <Stats players={props.players} totalPoints={props.totalPoints}/>
    <h1>Scoreboard</h1>
    <StopWatch/>
  </div>;

export default Header;
