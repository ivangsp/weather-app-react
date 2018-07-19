/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import Results from './Results';

const Index = (props) => {
    return (
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
									<div className="col">
										<Results results={props.results} />
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
	fetchWeather: PropTypes.func.isRequired
   };

export default Index;
