/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';

const Results = (props) => {
	let weather;

	if (props.results !== null && props.results !== undefined) {
		weather = props.results.consolidated_weather;
		return (
				<table className="table">
					<tbody>
					<tr>
						<td>Today</td>
						<td>Tomorrow</td>
						<td>{weather[2].applicable_date}</td>
					</tr>
					<tr>
						<td>
							<img className="icon"
									src={'https://www.metaweather.com/static/img/weather/' +
									weather[0].weather_state_abbr + '.svg'} />
						</td>
						<td>
							<img className="icon"
									src={'https://www.metaweather.com/static/img/weather/' +
									weather[1].weather_state_abbr + '.svg'} />
						</td>
						<td>
							<img className="icon"
									src={'https://www.metaweather.com/static/img/weather/' +
									weather[2].weather_state_abbr + '.svg'} />
						</td>
					</tr>
					<tr>
						<td>{weather[0].max_temp}</td>
						<td>{weather[1].max_temp}</td>
						<td>{weather[2].max_temp}</td>
					</tr>
					<tr>
						<td>{weather[0].min_temp}</td>
						<td>{weather[1].min_temp}</td>
						<td>{weather[2].min_temp}</td>
					</tr>

					<tr>
						<td>{weather[0].wind_direction_compass} - {weather[0].wind_direction_compass}</td>
						<td>{weather[1].wind_direction_compass} -{weather[0].wind_direction_compass}</td>
						<td>{weather[2].wind_direction_compass} - {weather[0].wind_direction_compass}</td>
					</tr>
					</tbody>
				</table>
		);
	} else {
		return null;
	}
};

Results.propTypes = {
	results: PropTypes.object
};

export default Results;
