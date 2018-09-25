import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayer from './components/AddPlayer';
import { connect } from 'react-redux';
import { modifyScore } from './actions/actions';
import { handleSubmitPlayer } from './actions/actions';
import { handleInput } from './actions/actions';
import { removePlayer } from './actions/actions';
import PropTypes from 'prop-types';
import './App.css';

let nextId = 0;

class App extends Component {

  totalPoints = () => this.props.playerRedu.players.reduce((accumulator,player)=> accumulator + player.score, 0);

  render() {
    const totalPoints = this.totalPoints();
    return (
      <div className="scoreboard">
        <Header
         players={this.props.playerRedu.players}
         totalPoints={totalPoints}
        />
        <div className="players">
          {this.props.playerRedu.players.map(item=>
            <Player
              key={item.id}
              id={item.id}
              name={item.name}
              score={item.score}
              modifyScore={this.props.modifyScore}
              removePlayer={this.props.removePlayer}
            />
          )}
        </div>
        <AddPlayer
          handleInput={(e)=>this.props.handleInput(e.target.value)}
          playerName={this.props.playerRedu.playerName}
          handleSubmitPlayer={(e)=>this.props.handleSubmitPlayer(e,this.props.playerRedu.playerName,nextId)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playerRedu: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modifyScore:(value,id) => {
      dispatch(modifyScore(value,id))
    },
    handleInput:(input) => {
      dispatch(handleInput(input))
    },
    handleSubmitPlayer:(event,name) => {
      nextId +=1;
      event.preventDefault();
      dispatch(handleSubmitPlayer(event,name,nextId))
    },
    removePlayer:(id) => {
      dispatch(removePlayer(id))
    }
  };
};


App.propTypes = {
  players: PropTypes.array,
  playerRedu: PropTypes.object.isRequired,
  modifyScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmitPlayer: PropTypes.func.isRequired,
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
