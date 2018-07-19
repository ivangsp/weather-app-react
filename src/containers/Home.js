/* eslint-disable no-tabs */
import {connect} from 'react-redux';
import {searchWeather, fetchWeather} from '../actions/index';
import Home from '../components/Home/index';

const mapStateToProps = (state) => {
	return ({
		flightMode: state.flightMode,
		places: state.places,
		results: state.results
	});
};

const mapDispatchToProps = (dispatch) => ({
	searchWeather: (place) => dispatch(searchWeather(place)),
	fetchWeather: (woeid) => dispatch(fetchWeather(woeid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
