import $ from 'jquery';
const MOVIE_APP_ID = '964c52fc93233a29723b2db3f2f39ede';

export const update_query = (event) => ({
	type: 'update_query',
	val: event.target.value
});

export const displaySummary = (id) => ({
	type: 'summarize',
	specific: id
});

export const back_to_results = () => ({
	type: 'back_to_results'
});

function movieInfo(data) {
	return {
		type: 'movie_info',
		payload: data
	};
}

function movieError(resp) {
	let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
	return {
		type: 'movie_error',
		error: error
	};
}

function fetchingMovieInfo() {
	return {
		type: 'fetch_movie'
	}
}

export function get_results(q) {
	return function(dispatch) {
		dispatch(fetchingMovieInfo());
		$.ajax({
			url: 'https://api.themoviedb.org/3/search/movie',
			data: {
				query: q,
				api_key: MOVIE_APP_ID
			}
		})
		.then(data => dispatch(movieInfo(data)))
		.catch(resp => dispatch(movieError(resp)));
	}
};
