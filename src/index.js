/* eslint-disable no-tabs */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createLogger} from 'redux-logger';


import './static/css/index.css';
import App from './App';
import reducer from './reducers/index';


const composeStoreEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();


let store = createStore(
		connectRouter(history)(reducer), // Wrap top level reducer with `connectRouter`
		composeStoreEnhancers(
				applyMiddleware(
						routerMiddleware(history), // Integrate history actions with history API
						thunk,
						createLogger()
				)
		)
);


ReactDOM.render(
		<Provider store={store} >
			<App history={history}/>
		</Provider>,
		document.getElementById('root')
);
registerServiceWorker();


