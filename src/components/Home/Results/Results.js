/* eslint-disable no-tabs,no-mixed-spaces-and-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import arrow from '../../../static/icons/windarrow.svg';

const Results = (props) => {
	let weather;
	if (props.flightMode) {
		return (
				<div className="spin pl-5">
					<i className="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true" />
					<p>Loading...........</p>
				</div>
		);
	}

	if (props.results !== null && props.results !== undefined) {
		weather = props.results.consolidated_weather;
		return (
				<table className="table">
					<tbody>
					<tr className="date">
						<td >Today</td>
						<td>Tomorrow</td>
						<td>{weather[2].applicable_date}</td>
					</tr>
					<tr>
						<td>
							<img className="icon-weather-state"
									 src={'https://www.metaweather.com/static/img/weather/' +
									 weather[0].weather_state_abbr + '.svg'} />
							<span className="pl-2">{weather[0].weather_state_name}</span>
						</td>
						<td>
							<img className="icon-weather-state"
									 src={'https://www.metaweather.com/static/img/weather/' +
									 weather[1].weather_state_abbr + '.svg'} />
							<span className="pl-2">{weather[1].weather_state_name}</span>
						</td>
						<td>
							<img className="icon-weather-state"
									 src={'https://www.metaweather.com/static/img/weather/' +
									 weather[2].weather_state_abbr + '.svg'} />
							<span className="pl-2">{weather[2].weather_state_name}</span>
						</td>
					</tr>
					<tr>
						<td>Max:
							<span className="pl-2">{Math.round(weather[0].max_temp)}<sup>o</sup>C</span>
						</td>
						<td>Max:
							<span className="pl-2">{Math.round(weather[1].max_temp)}<sup>o</sup>C</span>
						</td>
						<td>Max:
							<span className="pl-2 ">{Math.round(weather[2].max_temp)}<sup>o</sup>C</span>
						</td>

					</tr>
					<tr>
						<td>Min:
							<span className="pl-2">{Math.round(weather[0].min_temp)}<sup>o</sup>C</span>
						</td>
						<td>Min:
							<span className="pl-2">{Math.round(weather[1].min_temp)}<sup>o</sup>C</span>
						</td>
						<td>Min:
							<span className="pl-2">{Math.round(weather[2].min_temp)}<sup>o</sup>C</span>
						</td>
					</tr>

					<tr>
						<td>
							<img src={arrow} alt=""
									 className={'icon-arrow-' + weather[0].wind_direction_compass}/>
							<span className="ml-3">{Math.round(weather[0].wind_speed)}mph</span>
						</td>
						<td>
							<img src={arrow} alt=""
									 className={'icon-arrow-' + weather[1].wind_direction_compass}/>
							<span className="ml-3">{Math.round(weather[1].wind_speed)}mph</span>
						</td>
						<td>
							<img src={arrow} alt=""
									 className={'icon-arrow-' + weather[2].wind_direction_compass}/>
							<span className="ml-3">{Math.round(weather[2].wind_speed)}mph</span>
						</td>
					</tr>
					</tbody>
				</table>
		);
	} else {
		return null;
	}
};

Results.propTypes = {
	results: PropTypes.object,
	flightMode: PropTypes.bool
};

export default Results;
