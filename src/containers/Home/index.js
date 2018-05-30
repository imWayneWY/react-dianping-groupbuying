import React,{ Component } from 'react';
import HomeHeader from '../../components/HomeHeader';

class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <HomeHeader />
            </div>
        );
    }
}

export default Home;
