import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let combos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

class TicTacToe extends React.Component{
  constructor() {
    super();
    this.state = {
      player: 'X',
      game: ["","","","","","","","",""],
      message: 'Player 1, make your move',
      scoreboard: [
        {
          name: 'Player 1',
          score: 0
        },
        {
          name: 'Draw',
          score: 0
        },
        {
          name: 'Player 2',
          score: 0
        }
      ]
    };
  }
  markSquare(ind) {
    if (this.state.game[ind] !== "") {
      this.setState({
        message: 'That spot is already taken.'
      });
    } else {
      let x = this.state.game;
      x[ind] = this.state.player;
      this.setState({
        game: x,
        player: this.state.player === 'X' ? 'O' : 'X',
        message: `Player ${this.state.player === 'X' ? '2' : '1'}, make your move`
      });
    }
  }
  reset() {
    let winner;
    let new_scoreboard = this.state.scoreboard;
    let game_win = combos.some((c) => {
      return c.every((i) => {
        winner = this.state.game[i];
        return this.state.game[i] === (this.state.player === 'X' ? 'O' : 'X');
      });
    });
    if (game_win) {
      if (winner === 'X') {
        new_scoreboard[0].score += 1;
      } else {
        new_scoreboard[2].score += 1;
      }
      this.setState({
        player: 'X',
        game: ["","","","","","","","",""],
        message: 'Player 1, make your move',
        scoreboard: new_scoreboard
      });
    } else {
      new_scoreboard[1].score += 1;
      this.setState({
        player: 'X',
        game: ["","","","","","","","",""],
        message: 'Player 1, make your move',
        scoreboard: new_scoreboard
      });
    }
  }
  render() {
    let game_win = combos.some((c) => {
      return c.every((i) => {
        return this.state.game[i] === (this.state.player === 'X' ? 'O' : 'X');
      });
    });
    let game_draw = (this.state.game.reduce((x,y) => {return x + y},"")).length === 9;
    return (
      <div className="ttt">
        <div className="status">
          <div className="title">Tic Tac Toe</div>
          <div className="message">
            <div className="innerMessage">
              {game_win ? `Game over. Player ${this.state.player === 'X' ? '2' : '1'} has won!` : (game_draw ? `Game over.  It's a draw.` : this.state.message)}
            </div>
            <div className={game_win || game_draw ? "reset" : "noreset"} onClick={(event) => {this.reset()}}>
              Start Over
            </div>
          </div>
        </div>
        <div className="board">
          {this.state.game.map((element,idx) => (
            <div className="cell" onClick={(event) => {game_draw || game_win ? event.preventDefault() : this.markSquare(idx)}}><i className={this.state.game[idx] === "X" ? "fa fa-fw fa-times" : (this.state.game[idx] === "O" ? "fa fa-fw fa-circle-o" : "")}></i></div>
          ))}
        </div>
        <div className="scoreboard">
          {this.state.scoreboard.map((element,idx) => (
            <div key={idx} className="scorecard">
              <div className="winner"><div className="text_contain">{this.state.scoreboard[idx].name}</div></div>
              <div className="score"><div className="text_contain">{this.state.scoreboard[idx].score}</div></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TicTacToe/>,
  document.getElementById('root')
);
