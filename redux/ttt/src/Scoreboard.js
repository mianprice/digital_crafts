import React from 'react';

export class Scoreboard extends React.Component {
  render(){
    return(
      <div>
        <div className="scoreboard">
          <div className="scoreboardTitle">SCOREBOARD</div>
          <div className="scoreTitle">
            Player 1 (X)
          </div>
          <div className="scoreTitle">
            Draw
          </div>
          <div className="scoreTitle">
            Player 2 (O)
          </div>
          <div className="score">
            {this.props.scores.player1}
          </div>
          <div className="score">
            {this.props.scores.draw}
          </div>
          <div className="score">
            {this.props.scores.player2}
          </div>
        </div>
      </div>
    )
  }
}
