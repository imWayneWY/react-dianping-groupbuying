import React,{ Component } from 'react';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';


class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <HomeHeader />
                <Category />
                <div style={{height: '15px'}}>{/*split line*/}</div>
                <Ad/>
                <List cityName="panjin" />
            </div>
        );
    }
}

export default Home;
