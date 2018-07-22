/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App';
import {createMemoryHistory} from 'history';

const history = createMemoryHistory('/');

it('renders without crashing', () => {
    shallow(<App history={history} />);
});
