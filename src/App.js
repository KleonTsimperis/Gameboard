import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import axios from 'axios';
import AddPlayer from './components/AddPlayer';
import './App.css';

let nextId = 0;

class App extends Component {
    state = {
      players:[],
      playerName:'',
      running:false,
      elapsedTime:0,
      previousTime:0
    }

  componentDidMount = () => {
    this.interval = setInterval(this.onTick, 100);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  incrementScore = id => {
    this.setState({
      players: this.state.players.map(player=>{
        if(id===player.id){
          return {
            ...player,
            score: this.state.players[id].score + 1
          }
        }
        return player;
      })
    })
  }

  decrementScore = id => {
    this.state.players[id].score -=1;
    this.setState(this.state);
  }

  handleInput = e =>
    this.setState({[e.target.name]:e.target.value});

  handleSubmitPlayer = e => {
    e.preventDefault();
    this.setState({
      players:[
        ...this.state.players,
        {
          name: this.state.playerName,
          score: 0,
          id: nextId
        }
      ],
      playerName:''
    })
    nextId += 1;
  }

  removePlayer = id => {
    const updatedListOfPlayers = this.state.players.filter(player=>player.id!==id);
    this.setState({players:updatedListOfPlayers})
  }

  onTick = () => {
    if (this.state.running){
      let now = Date.now();
      this.setState({
        previousTime:now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
      });
    }
  }

  onStart = () => this.setState({running:true, previousTime: Date.now()});

  onStop = () => this.setState({running:false});

  onReset = () => this.setState({elapsedTime:0, previousTime: Date.now()});

  totalPoints = () => this.state.players.reduce((accumulator,player)=> accumulator + player.score, 0);

  render() {
    const totalPoints = this.totalPoints();
    return (
      <div className="scoreboard">
        <Header
         players={this.state.players}
         totalPoints={totalPoints}
         running={this.state.running}
         onStart={this.onStart}
         onStop={this.onStop}
         elapsedTime={this.state.elapsedTime}
         onReset={this.onReset}
        />
        <div className="players">
          {this.state.players.map(item=>
            <Player
              key={item.id}
              id={item.id}
              name={item.name}
              score={item.score}
              incrementScore={this.incrementScore}
              decrementScore={this.decrementScore}
              removePlayer={this.removePlayer}
            />
          )}
        </div>
        <AddPlayer
          handleInput={this.handleInput}
          playerName={this.state.playerName}
          handleSubmitPlayer={this.handleSubmitPlayer}
        />
      </div>
    );
  }
}

export default App;
