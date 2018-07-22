/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import {NavBar, Results, SearchForm} from '../../components/Home/index';

import {connect} from 'react-redux';
import {searchWeather, fetchWeather} from '../../actions/index';

const Home = (props) => {
    return (
        <div className="container-fluid">
            <NavBar />
            <div className = "container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <SearchForm
                                search={props.searchWeather}
                                places={props.places}
                                fetchWeather={props.fetchWeather}
                            />
                        </div>
                        <div className="row">
                            <div className="col-xsm-12">
                                <Results results={props.results} flightMode={props.flightMode} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
Home.propTypes = {
    searchWeather: PropTypes.func.isRequired,
    places: PropTypes.array.isRequired,
    results: PropTypes.object,
    fetchWeather: PropTypes.func.isRequired,
    flightMode: PropTypes.bool
};


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
