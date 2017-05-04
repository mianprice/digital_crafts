import $ from 'jquery';
const WEATHER_APP_ID = '964c52fc93233a29723b2db3f2f39ede';

export const update_query = (event) => ({
	type: 'update_query',
	val: event.target.value
});

export const start_get_results = () => ({
	type: 'start_query'
});

export const get_results = (q) => {
	
};
