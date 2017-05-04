const INITIAL_STATE = {
	query: ""
};

export function reducer(state = INITIAL_STATE,action) {
	if (action.type === 'init') {
		return INITIAL_STATE;
	} else if (action.type === 'update_query') {
		return Object.assign({}, state, {
			query: action.val
		});
	} else {
		return state;
	}
};
