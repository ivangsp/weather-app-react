/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import Results from './Results';
import NavBar from './NavBar';

const Index = (props) => {
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
Index.propTypes = {
	searchWeather: PropTypes.func.isRequired,
	places: PropTypes.array.isRequired,
	results: PropTypes.object,
	fetchWeather: PropTypes.func.isRequired,
	flightMode: PropTypes.bool.isRequired
   };

export default Index;
