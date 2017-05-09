import $ from 'jquery';

export function toggleEdit() {
  return { type: 'toggle_edit' };
}

export function contentUpdate(c) {
  return { type: 'content_update', content: c };
}

export function updatePage(t,c) {
  console.log(c);
  console.log(t);
  let asyncAction = function(dispatch) {
    $.ajax({
      url: `http://localhost:4000/api/page/${t}`,
      method: 'PUT',
      data: { "content": c }
    })
    .then(data => dispatch(pageInfo(data)))
    .catch(resp => dispatch(pageError(resp)))
  };
  return asyncAction;
}

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
