import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    search() {
        this.props.search(this.state.name);
    }

    render() {
        return (
            <div class="form-row">
                <div class="col-7">
                    <input type="text" className="form-control" 
                        placeholder="search by city name"
                        onChange ={this.handleChange} 
                        value = {this.state.name} />>
                </div>
            </div>
        )
    }
}
SearchForm.propTypes = {
 search: PropTypes.func.isRequired   
}
export default SearchForm;