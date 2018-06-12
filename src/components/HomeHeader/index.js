import React, { Component } from 'react';
import SearchInput from '../SearchInput';
import { Link } from 'react-router-dom';
import './style.css';

class HomeHeader extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="home-header" >
                <div className="home-header-left float-left">
                    <Link to="/city">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        &nbsp;
                        <SearchInput value=""/>
                    </div>
                </div>
            </div>  
        );
    }
}

export default HomeHeader;