const INITIAL_STATE = {
	query: "",
	movieData: null,
	isFetching: false,
	error: null
};

export function reducer(state = INITIAL_STATE,action) {
	if (action.type === 'init') {
		return INITIAL_STATE;
	} else if (action.type === 'update_query') {
		return Object.assign({}, state, {
			query: action.val
		});
	} else if (action.type === 'movie_info') {
		return Object.assign({}, state, {
			movieData: action.payload,
			isFetching: false,
			error: null
		});
	} else if (action.type === 'fetch_movie') {
		return Object.assign({}, state, {
			movieData: null,
			isFetching: true,
			error: null
		});
	} else if (action.type === 'movie_error') {
		return Object.assign({}, state, {
			movieData: null,
			isFetching: false,
			error: action.error
		});
	}
	return state;
};
