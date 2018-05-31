import React,{ Component } from 'react';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';

class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <HomeHeader />
                <Category />
            </div>
        );
    }
}

export default Home;
