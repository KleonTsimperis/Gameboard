import React from 'react';
import '../App.css';


const Stats = props => {
  let arr = [];
  if (props.totalPoints > 101) {
    arr.push('danger');
  }
  if (props.totalPoints < 101) {
    arr = [];
  }
  return(
    <table className="stats">
      <tbody className={arr.join('')}>
        <tr>
          <td>Players:</td>
          <td>{props.players.length}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{props.totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}



export default Stats;
