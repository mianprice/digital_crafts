const INITIAL_STATE = "hello";

export function reducer(state = INITIAL_STATE,action) {
	if (action.type === 'init') {
		return INITIAL_STATE;
	} else {
		return state;
	}
};
