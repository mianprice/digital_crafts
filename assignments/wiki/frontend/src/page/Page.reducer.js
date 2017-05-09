const INITIAL = {
  title: "Home",
  content: "This is the home page.",
  editing: false
}

export default function reducer(state=INITIAL, action) {
  if (action.type === 'update_contents') {
    let title = action.payload.title;
    let content = action.payload.content;
    return Object.assign({}, state, {
      title,
      content
    });
  } else if (action.type === 'toggle_edit') {
    return Object.assign({}, state, {
      editing: !state.editing
    });
  } else if (action.type === 'content_update') {
    return Object.assign({}, state, {
      content: action.content
    });
  } else if (action.type === 'save_contents') {
    return Object.assign({}, state, {
      content: action.payload.content,
      editing: false
    });
  } else {
    return state;
  }
}
