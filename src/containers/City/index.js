import React, { Component } from 'react';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import { userChangeCity } from '../../actions';
import { connect } from 'react-redux';

class City extends Component{
    render(){
        const {userinfo,dispatchUserChangeCity} = this.props;
        return(
            <div>
                <Header title="Choose your city" />
                <CurrentCity cityName={userinfo.cityName} />
                <CityList changeFn={dispatchUserChangeCity}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchUserChangeCity: (cityName) => {dispatch(userChangeCity(cityName))}
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);