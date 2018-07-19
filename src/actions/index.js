/* eslint-disable no-tabs */
import * as type from './types';
import axios from 'axios';

const ROOT_URL = 'http://internship-proxy.aw.ee:3001';

export const searchWeather = (place) => (dispatch) => {
	axios.get(ROOT_URL + '/location?query=' + place)
			.then((response) => {
				dispatch({type: type.FETCH_PLACES, payload: response.data});
			})
			.catch((error) => dispatch({type: type.ERROR_OCCURRED, payload: error}));
};

export const fetchWeather = (woeid) => (dispatch) => {
	dispatch({type: type.FLIGHT_MODE});
	axios.get(ROOT_URL + '/location/' + woeid)
			.then((response) => {
				dispatch({type: type.FETCH_WEATHER, payload: response.data});
			})
			.catch((error) => dispatch({type: type.ERROR_OCCURRED, payload: error}));
};
