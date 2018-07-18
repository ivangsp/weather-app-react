/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';

const Results = (props) => {
	return (
				<table className="table">
					<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
					</tbody>
				</table>
	);
};
Results.propTypes = {
	results: PropTypes.object.isRequired
}

export default Results;
