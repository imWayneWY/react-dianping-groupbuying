import React, { Component } from 'react';
import history from '../../history';
import './style.css';

class CityList extends Component{
    render(){
        return(
            <div className="city-list-container">
                <h3>Hot Cities</h3>
                <ul className = "clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this,'Saskatoon')}>Saskatoon</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this,'Montreal')}>Montreal</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this,'Toronto')}>Toronto</span>
                    </li>
                </ul>
            </div>
        );
    }
    clickHandle(cityName){
        this.props.changeFn(cityName);
        history.push('/');
    }

}

export default CityList;