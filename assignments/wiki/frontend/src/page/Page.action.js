import $ from 'jquery';

function pageInfo(data) {
  return { type: 'update_contents', payload: data };
}

function pageError(resp) {
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
  return { type: 'weather_error', error: error };
}

export function fetchPage(title) {
  let asyncAction = function(dispatch) {
    $.ajax({
      url: `http://localhost:4000/api/page/${title}`
    })
    .then(data => dispatch(pageInfo(data)))
    .catch(resp => dispatch(pageError(resp)))
  };
  return asyncAction;
}
