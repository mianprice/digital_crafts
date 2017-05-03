import React from 'react';

export class TTT extends React.Component {
  render(){
    let controlSet = this.props.game.is_done ? (
      <div className="reset" onClick={(event) => this.props.reset()}>Reset</div>
    ) : (<div></div>);
    return(
      <div>
        <div className="board">
          {this.props.game.board.map((cell, idx) =>
            <div key={idx} className="gridCell" onClick={(event) => this.props.select(idx)}>{cell}</div>
          )}
        </div>
        <div className="scoreDisplay">

        </div>
        <div className="controls">
          {controlSet}
        </div>
      </div>
    )
  }
}
