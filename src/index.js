/* eslint-disable no-tabs */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import registerServiceWorker from './registerServiceWorker';

import './style/index.css';
import App from './App';
import reducer from './reducers/index';

const store = createStore(
		reducer,
		compose(
				applyMiddleware(logger, thunk),
				window.devToolsExtension ? window.devToolsExtension() : (f) => f
		)
);
ReactDOM.render(
		<Provider store={store} >
			<App />
		</Provider>,
		document.getElementById('root')
);
registerServiceWorker();


