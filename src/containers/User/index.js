import React, { Component } from 'react';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import OrderList from './subpage/OrderList';
import { connect } from 'react-redux';
import history from '../../history';

class User extends Component{
    render(){
        return(
            <div>
                <Header title="user home page" backRouter='/' />
                <UserInfo 
                    userName={this.props.userinfo.userName}
                    cityName={this.props.userinfo.cityName}
                />
                <OrderList 
                    userName={this.props.userinfo.userName}
                />
            </div>
        );
    }
    componentDidMount(){
        if(!this.props.userinfo.userName){
            history.push('/login');
        }
    }
}

function mapStateToProps(state){
    return{
        userinfo: state.userinfo
    };
}

function mapDispatchToProps(dispatch){
    return{};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);