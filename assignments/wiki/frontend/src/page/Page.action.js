import $ from 'jquery';

export function toggleEdit() {
  return { type: 'toggle_edit' };
};

export function contentUpdate(c) {
  return { type: 'content_update', content: c };
};

export function updatePage(t,c) {
  console.log(c);
  console.log(t);
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'PUT',
      url: `http://localhost:4000/api/page/${t}`,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({ "content": c })
    })
    .then(data => dispatch(updatePageInfo(data)))
    .catch(resp => dispatch(pageError(resp,t)))
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
