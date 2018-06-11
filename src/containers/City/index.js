import React, { Component } from 'react';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

class City extends Component{
    render(){
        return(
            <div>
                <Header title="Choose your city" />
                <CurrentCity cityName='Saskatoon' />
                <CityList />
            </div>
        );
    }
}

export default City;