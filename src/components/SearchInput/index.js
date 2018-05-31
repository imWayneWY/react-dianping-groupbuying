import React, { Component } from 'react';

import './style.css';

class SearchInput extends Component{
    constructor(){
        super();
        this.state = {
            value: ''
        };
    }
    render() {
        return (
            <input className="search-input"
            type="text"
            placeholder="please input keywords"
            value={this.state.value}/>
        );
    }
}

export default SearchInput;