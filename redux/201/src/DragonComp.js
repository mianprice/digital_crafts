import React from 'react';

export class DragonGame extends React.Component {
  render() {
    let message = this.props.current.message;
    let controls = this.props.current.game_end ? (
      <div>
        <button onClick={this.props.reset}>
          Reset
        </button>
      </div>
      ) : (
      <div>
        <button onClick={this.props.fight}>
          Fight
        </button>
        <button onClick={this.props.flight}>
          Flight
        </button>
      </div>
    );
    return (
      <div className="comp">
        <img alt="dragon" src="http://img10.deviantart.net/e984/i/2015/287/c/5/red_dragon_by_sandara-d6hpycs.jpg" width="300"/>
        <br/>
        <label>Dragon: {this.props.current.dragon}</label>&nbsp;
        <label>Hero: {this.props.current.hero}</label>
        <br/>
        {message}
        <br/>
        {controls}
      </div>
    );
  }
}

export function reducer(state, action) {
  if (state === undefined || action.type === 'reset') {
    return {
      hero: 10,
      dragon: 20,
      message: 'Fight or Flight?'
    };
  } else if (action.type === 'fight') {
    if (action.val > 0.5) {
      if (state.hero - 5 <= 0) {
        return {
          hero: state.hero - 5,
          dragon: state.dragon,
          message: 'The Dragon has defeated the Hero.  Play Again?',
          game_end: true
        };
      } else {
        return {
          hero: state.hero - 5,
          dragon: state.dragon,
          message: 'Hero took 5 damage. Fight or Flight?',
          game_end: false
        };
      }
    } else {
      if (state.dragon - 5 <= 0) {
        return {
          hero: state.hero,
          dragon: state.dragon - 5,
          message: 'Hero has vanquished the Dragon! Play Again?',
          game_end: true
        };
      } else {
        return {
          hero: state.hero,
          dragon: state.dragon - 5,
          message: 'Dragon took 5 damage. Fight or Flight?',
          game_end: false
        };
      }
    }
  } else if (action.type === 'flight') {
    return {
      hero: state.hero + 2,
      dragon: state.dragon,
      message: 'Hero gained 2 health. Fight or Flight?',
      game_end: false
    }
  } else {
    return state;
  }
}
