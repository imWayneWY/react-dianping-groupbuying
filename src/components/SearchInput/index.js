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
            value={this.state.value}
            onChange = {this.handleChnge.bind(this)}
            onKeyUp = {this.keyUpHandle.bind(this)}/>
        );
    }
    handleChnge(e){
        this.setState({
            value: e.target.value
        })
    }
    keyUpHandle(e){
        if(e.keyCode !== 13){
            return
        }
        this.props.enterHandle(e.target.value);
    }
}

export default SearchInput;