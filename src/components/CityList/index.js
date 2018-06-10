import React, { Component } from 'react';
import City from '../../containers/City';

class CityList extends Component{
    render(){
        return(
            <div className="city-list-container">
                <h3>Hot Cities</h3>
                <ul className = "clear-fix">
                    <li>
                        <span>Saskatoon</span>
                    </li>
                    <li>
                        <span>Montreal</span>
                    </li>
                    <li>
                        <span>Toronto</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CityList;