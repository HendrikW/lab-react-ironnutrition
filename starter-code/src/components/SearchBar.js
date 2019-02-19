
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor() {
        super() // sets this.props
        this.state = {
            searchTerm: ''
        }
    }

    onChange(event) {
        const newTerm = event.target.value        
        this.setState({
            searchTerm: newTerm
        })        
        this.props.searchTermChange(newTerm)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.onChange(e)} type="text" className="input search-bar" name="search" placeholder="Search" value={this.props.searchTerm} />
            </div>
        )
    }
}

export default SearchBar;