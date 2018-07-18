/* eslint-disable no-tabs,no-mixed-spaces-and-tabs */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
		this.getItemValue = this.getItemValue.bind(this);
		this.renderItem = this.renderItem.bind(this);
  }

  handleChange(e) {
    this.setState({
      address: e.target.value
    });
		this.props.search(e.target.value);
	}

  onSelect(val) {
		this.setState({
			address: val
		});
		let addressId = this.props.results.filter((obj) => {
			return obj.title === val;
		});
    console.log('>>', addressId[0].woeid);
  }

	renderItem(item, isHighlighted) {
		return (
				<div style={{background: isHighlighted ? 'lightgray' : 'white'}} key={item.woeid}>
					{item.title}
				</div>
		);
	}

	getItemValue(item) {
		return `${item.title}`;
	}

	render() {
		return (
				<div>
					 <Autocomplete
               getItemValue={this.getItemValue}
							 items={this.props.results}
							 renderItem={this.renderItem}
							 value={this.state.address}
							 onChange={this.handleChange}
							 onSelect={this.onSelect}
					 />
				</div>
		);
	}
}
SearchForm.propTypes = {
  search: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
};
export default SearchForm;
