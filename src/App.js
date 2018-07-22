/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

import Home from './containers/Home/Home';

const App = ({history}) => {
	return (
			<ConnectedRouter history={history}>
				<div>
					<Route path='/' exact component={Home} />
				</div>
			</ConnectedRouter>
	);
};

App.propTypes = {
	history: PropTypes.object.isRequired
};
export default App;
