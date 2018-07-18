/* eslint-disable no-tabs */
import * as type from '../actions/types';
const initialState = {
	data: [],
	flightMode: false
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case type.SEARCHING_STARTED:
			return {...state, flightMode: true};

		case type.GET_RESULTS:
			return {flightMode: false, data: action.payload};
		default:
			return state;
	}
};
