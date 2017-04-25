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
      message: 'Player 1, make your move'
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
          <div className="message">{game_win ? `Game over. Player ${this.state.player === 'X' ? '2' : '1'} has won!` : (game_draw ? `Game over.  It's a draw.` : this.state.message)}</div>
        </div>
        <div className="board">
          <div className="cell" onClick={(event) => {this.markSquare(0)}}>{this.state.game[0] === "X" ? "X" : (this.state.game[0] === "O" ? "O" : "")}</div>
          <div className="cell" onClick={(event) => {this.markSquare(1)}}>{this.state.game[1] === "X" ? "X" : (this.state.game[1] === "O" ? "O" : "")}</div>
          <div className="cell" onClick={(event) => {this.markSquare(2)}}>{this.state.game[2] === "X" ? "X" : (this.state.game[2] === "O" ? "O" : "")}</div>
          <div className="cell" onClick={(event) => {this.markSquare(3)}}>{this.state.game[3] === "X" ? "X" : (this.state.game[3] === "O" ? "O" : "")}</div>
          <div className="cell" onClick={(event) => {this.markSquare(4)}}>{this.state.game[4] === "X" ? "X" : (this.state.game[4] === "O" ? "O" : "")}</div>
          <div className="cell" onClick={(event) => {this.markSquare(5)}}>{this.state.game[5] === "X" ? "X" : (this.state.game[5] === "O" ? "O" : "")}</div>
          <div className="cell" onClick={(event) => {this.markSquare(6)}}>{this.state.game[6] === "X" ? "X" : (this.state.game[6] === "O" ? "O" : "")}</div>
          <div className="cell" onClick={(event) => {this.markSquare(7)}}>{this.state.game[7] === "X" ? "X" : (this.state.game[7] === "O" ? "O" : "")}</div>
          <div className="cell" onClick={(event) => {this.markSquare(8)}}>{this.state.game[8] === "X" ? "X" : (this.state.game[8] === "O" ? "O" : "")}</div>
        </div>
        <div className="scoreboard"></div>
      </div>
    );
  }
}

ReactDOM.render(
  <TicTacToe/>,
  document.getElementById('root')
);
