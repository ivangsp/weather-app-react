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
		let address = this.props.places.filter((obj) => {
			return obj.title === val;
		});
		this.props.fetchWeather(address[0].woeid);
  }

	renderItem(item, isHighlighted) {
		return (
				<div className="dropdown" style={{background: isHighlighted ? 'goldenrod' : 'white'}} key={item.woeid}>
					{item.title}
				</div>
		);
	}

	getItemValue(item) {
		return `${item.title}`;
	}

	render() {
		return (
				<div className="">
					<Autocomplete
							getItemValue={this.getItemValue}
							items={this.props.places}
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
	places: PropTypes.array.isRequired,
	fetchWeather: PropTypes.func.isRequired
};
export default SearchForm;
