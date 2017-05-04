const INITIAL_STATE = {
  board: ["","","","","","","","",""],
  currentPlayer: "X",
  is_win: false,
  is_draw: false,
  is_done: false,
  winner: undefined,
  scores: {
    player1: 0,
    player2: 0,
    draw: 0
  },
  message: "X moves next"
};

const combos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

export function reducer(state = INITIAL_STATE, action){
  if (action.type === 'init') {
    return state;
  } else if (action.type === 'select') {
    let selection = action.idx;
    // let new_board = JSON.parse(JSON.stringify(state.board));
    // new_board[selection] = state.currentPlayer;
    let no_move;
    if (state.board[action.idx].length > 0) {
      no_move = true;
    } else {
      no_move = false;
    }
    let new_board = state.board.map((element, i) => {
      if (element.length > 0) {
        return element;
      } else {
        return action.idx === i ? state.currentPlayer : element;
      }
    });
    let win_check = combos.some((c) => {
      return c.every((i) => {
        return new_board[i] === state.currentPlayer;
      });
    });
    let draw_check = (new_board.reduce((a,b) => {return a + b},"")).length === 9;
    let new_score = Object.assign({},state.scores);
    console.log(new_score);
    if (win_check) {
      if (state.currentPlayer === 'X') {
        new_score['player1'] += 1;
      } else {
        new_score['player2'] += 1;
      }
    } else if (draw_check) {
      new_score.draw += 1;
    }
    let c_player = no_move || win_check || draw_check ? state.currentPlayer : (state.currentPlayer === 'X' ? 'O' : 'X');
    let c_message;
    if (win_check) {
      c_message = `${c_player} won the game!`;
    } else if (draw_check) {
      c_message = `Its a draw!`;
    } else {
      c_message = `${c_player} moves next`;
    }
    return {
      board: new_board,
      currentPlayer: c_player,
      is_win: win_check,
      is_draw: draw_check,
      is_done: (win_check || draw_check),
      winner: win_check ? state.currentPlayer : (draw_check ? 'draw' : undefined),
      scores: new_score,
      message: c_message
    };
  } else if (action.type === 'reset') {
    let current_score = Object.assign({},state.scores);
    let new_state = Object.assign({},INITIAL_STATE,{
      scores: current_score
    });
    return new_state;
  } else {
    return state;
  }
}
[true,false,true,true,false].some((i) => {
  return i;
})
