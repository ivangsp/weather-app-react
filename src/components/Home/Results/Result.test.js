/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';

import Result from './Results';
describe('SearchForm', () => {
    it('renders successfully', () => {
        const wrapper = shallow(<Result />);
        expect(wrapper.length).toBe(1);
    });
})
