import React, { Component } from 'react';
import './style.css';

class CurrentCity extends Component {
    render(){
        return(
            <div>
                <h2>{this.props.cityName}</h2>
            </div>
        );
    }
}

export default CurrentCity;