import $ from 'jquery';
import {hashHistory} from 'react-router';

export function signup_send(s) {
  let u = s.username;
  let p = s.password;

  let asyncAction = function(dispatch) {
    $.ajax({
      url: 'http://localhost:4000/api/signup',
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        username: u,
        password: p
      })
    })
    .then(data => dispatch(loggedInRedirect(data)))
    .catch(res => dispatch(errorRedirect(res)));
  }
  return asyncAction;
}

function loggedInRedirect(data) {
  hashHistory.push('/');
  return { type: 'signup_send', payload: data };
}

function errorRedirect(res) {
  let error = (res && res.responseJSON && res.responseJSON.message) || 'Something went wrong!';
  return { type: 'page_error', error: error };
}

export function s_update_username(u) {
  return {type: 's_update_username', username: u};
}

export function s_update_password(p) {
  return {type: 's_update_password', password: p};
}
