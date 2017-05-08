const INITIAL = {
  title: "Home",
  content: "This is the home page."
}

export default function reducer(state=INITIAL, action) {
  if (action.type === 'update_contents') {
    let title = action.payload.title;
    let content = action.payload.content;
    return Object.assign({}, state, {
      title: title,
      content: content
    });
  } else if (action.type === 'subtract') {
    return "subtract";
  } else {
    return state;
  }
}
