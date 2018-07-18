/* eslint-disable no-tabs */
import {connect} from 'react-redux';
import {searchWeather} from '../actions/index';
import Home from '../components/Home/index';

const mapStateToProps = (state) => {
	return ({
		flightMode: state.flightMode,
		data: state.data
	});
};

const mapDispatchToProps = (dispatch) => ({
	searchWeather: (place) => dispatch(searchWeather(place))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
