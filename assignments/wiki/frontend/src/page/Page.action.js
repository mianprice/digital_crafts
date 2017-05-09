import $ from 'jquery';

export function toggleEdit() {
  return { type: 'toggle_edit' };
};

export function contentUpdate(c) {
  return { type: 'content_update', content: c };
};

export function updatePage(title,con,user_token) {
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'PUT',
      url: `http://localhost:4000/api/page/${title}`,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({ content: con, token:user_token })
    })
    .then(data => dispatch(updatePageInfo(data)))
    .catch(resp => dispatch(pageError(resp,title)))
  };
  return asyncAction;
};

function pageInfo(data) {
  return { type: 'update_contents', payload: data };
}

function updatePageInfo(data) {
  return { type: 'save_contents', payload: data };
}

function pageError(resp, title) {
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
  return { type: 'page_error', error: error, title: title };
}

export function fetchPage(title) {
  let asyncAction = function(dispatch) {
    $.ajax({
      url: `http://localhost:4000/api/page/${title}`
    })
    .then(data => dispatch(pageInfo(data)))
    .catch(resp => dispatch(pageError(resp,title)))
  };
  return asyncAction;
};
