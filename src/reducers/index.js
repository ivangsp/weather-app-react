/* eslint-disable no-tabs */
import * as type from '../actions/types';
const initialState = {
	places: [],
	flightMode: false,
	results: null,
	error: ''
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case type.FLIGHT_MODE:
			return {...state, flightMode: true};

		case type.FETCH_PLACES:
			return {places: action.payload};

		case type.FETCH_WEATHER:
			return {...state, flightMode: false, results: action.payload};

		case type.ERROR_OCCURRED:
			return {...state, error: action.payload};

		default:
			return state;
	}
};
