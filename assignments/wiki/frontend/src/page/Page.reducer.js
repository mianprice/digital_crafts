const INITIAL = {
  title: "Home",
  content: "This is the home page.",
  editing: false,
  newPage: false,
  last_edit: null
}

export default function reducer(state=INITIAL, action) {
  if (action.type === 'update_contents') {
    let title = action.payload.title;
    let content = action.payload.content;
    let last_edit = action.payload.username;
    return Object.assign({}, state, {
      title,
      content,
      newPage: false,
      last_edit
    });
  } else if (action.type === 'toggle_edit') {
    return Object.assign({}, state, {
      editing: !state.editing
    });
  } else if (action.type === 'content_update') {
    return Object.assign({}, state, {
      content: action.content,
      newPage: false
    });
  } else if (action.type === 'save_contents') {
    return Object.assign({}, state, {
      title: action.payload.page.title,
      content: action.payload.page.content,
      last_edit: action.payload.author.username,
      editing: false,
      newPage: false
    });
  } else if (action.type === 'page_error') {
    return Object.assign({}, state, {
      title: action.title,
      content: "",
      newPage: true
    });
  }
  return state;
}
