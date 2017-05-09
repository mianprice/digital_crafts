const INITIAL = {
  username: null,
  password: null,
  error: null
}

export default function reducer(state=INITIAL, action) {
  if (action.type === 's_update_username') {
    let u = action.username;
    return Object.assign({}, state, {
      username: u
    });
  } else if (action.type === 's_update_password') {
    let p = action.password;
    return Object.assign({}, state, {
      password: p
    });
  } else if (action.type === 'signup_send') {
    return INITIAL;
  } else if (action.type === 'signup_error') {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
};
