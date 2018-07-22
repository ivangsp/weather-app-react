/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';

import NavBar from './NavBar';
describe('SearchForm', () => {
    it('renders successfully', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.length).toBe(1);
    });
})
