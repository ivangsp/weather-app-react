/* eslint-disable no-tabs */
import * as type from './types';
import axios from 'axios';

const ROOT_URL = 'http://internship-proxy.aw.ee:3001';

export const searchWeather = (place) => (dispatch) => {
	dispatch({type: type.SEARCHING_STARTED});
	axios.get(ROOT_URL + '/location?query=new')
			.then((response) => {
				console.log('response', response.data);
				dispatch({type: type.GET_RESULTS, payload: response.data});
			})
			.catch((error) => console.log('error occured'));
};
