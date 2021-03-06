import React, { Component } from 'react';
import SearchInput from '../SearchInput';
import { Link } from 'react-router-dom';
import history from '../../history';
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
                    <Link to='/user'><i className="icon-user"></i></Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        &nbsp;
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>  
        );
    }
    enterHandle(value){
        history.push('/search/all/'+encodeURIComponent(value));
    }
}

export default HomeHeader;