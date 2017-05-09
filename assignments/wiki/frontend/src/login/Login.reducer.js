const INITIAL = {
  username: null,
  password: null,
  error: null,
  token: null
};

export default function reducer(state=INITIAL, action) {
  if (action.type === 'l_update_username') {
    let u = action.username;
    return Object.assign({}, state, {
      username: u
    });
  } else if (action.type === 'l_update_password') {
    let p = action.password;
    return Object.assign({}, state, {
      password: p
    });
  } else if (action.type === 'login_success') {
    return Object.assign({}, state, {
      token: action.payload.token
    });
  } else if (action.type === 'login_error') {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
};
