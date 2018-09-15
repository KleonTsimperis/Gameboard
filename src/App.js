import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import axios from 'axios';
import AddPlayer from './components/AddPlayer';
import { connect } from 'react-redux';
import modifyScore from './actions/actions';
import './App.css';

let nextId = 2;

class App extends Component {

  totalPoints = () => this.props.playerRedu.players.reduce((accumulator,player)=> accumulator + player.score, 0);

  render() {
    const totalPoints = this.totalPoints();
    return (
      <div className="scoreboard">
        <Header
         players={this.props.playerRedu.players}
         totalPoints={totalPoints}
         running={this.props.running}
         onStart={this.onStart}
         onStop={this.onStop}
         elapsedTime={this.props.elapsedTime}
         onReset={this.onReset}
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
    playerRedu: state.playerReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modifyScore:(value,id) => {
      dispatch({
        type:"MODIFY_SCORE",
        payload:id,
        value
      })
    },
    handleInput:(input) => {
      dispatch({
        type:"HANDLE_INPUT",
        payload:input
      })
    },
    handleSubmitPlayer:(event,name) => {
      nextId +=1;
      event.preventDefault();
      dispatch({
        type:"HANDLE_SUBMIT_PLAYER",
        payload:{name,id:nextId}
      })
    },
    removePlayer:(id) => {
      dispatch({
        type:"REMOVE_PLAYER",
        payload:id
      })
    }
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
