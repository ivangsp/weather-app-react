/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';

import SearchForm from './SearchForm';
describe('SearchForm', () => {
    it('renders successfully', () => {
        const search = jest.fn();
        const fetchWeather = jest.fn();
        const wrapper = shallow(<SearchForm search={search} places={[]} fetchWeather={fetchWeather}/>);
        expect(wrapper.length).toBe(1);
        // expect(wrapper.find('input').length).toBe(1);
    });

    it('calls on search method onChange input', () => {
        const search = sinon.spy();
        const fetchWeather = sinon.spy();
        const wrapper = shallow(<SearchForm search={search} places={[]} fetchWeather={fetchWeather}/>);
        wrapper.simulate('change', {target: {value: 'L'}});
        expect(search).toBeCalled();
    });

    it('calls fetchWeather method when the place is selected input', () => {
        const search = jest.fn();
        const fetchWeather = jest.fn();
        const places = [{title: 'London'}, {title: 'Tallinn'}];
        const wrapper = shallow(<SearchForm search={search} places={places} fetchWeather={fetchWeather}/>);
        wrapper.simulate('change', {target: {value: 'L'}});
        expect(search).toHaveBeenCalled();
    });
})
