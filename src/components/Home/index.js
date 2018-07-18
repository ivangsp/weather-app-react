/* eslint-disable no-tabs */
import React from 'react';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';

const Index = (props) => {
    return (
        <div className = 'container'>
            <div className='row'>
               <SearchForm search={props.searchWeather} results={props.data}/>
            </div>
        </div>
    );
};
Index.propTypes = {
	searchWeather: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
   };

export default Index;
