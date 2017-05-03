const INITIAL_STATE = {
  board: ["","","","","","","","",""],
  currentPlayer: "X",
  is_win: false,
  is_draw: false,
  is_done: false,
  winner: undefined
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
    return {
      board: new_board,
      currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      is_win: win_check,
      is_draw: draw_check,
      is_done: (win_check || draw_check),
      winner: win_check ? state.currentPlayer : (draw_check ? 'draw' : undefined)
    };
  } else if (action.type === 'reset') {
    return INITIAL_STATE;
  } else {
    return state;
  }



}
[true,false,true,true,false].some((i) => {
  return i;
})
