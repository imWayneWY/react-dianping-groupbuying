import React, { Component } from 'react';
import Header from '../../components/Header';
import history from '../../history';
import LoginComponent from '../../components/Login';
import { userUpdate } from '../../actions';
import { connect } from 'react-redux';


class Login extends Component{
    constructor(){
        super();
        this.state = {
            checking: true
        }
    }
    render(){
        return(
            <div>
                <Header title="Login" />
                {
                    this.state.checking
                    ? <div>{/* waiting... */}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        );
    }
    componentDidMount(){
        this.doCheck();
    }
    doCheck(){
        const userinfo = this.props.userinfo;
        if(userinfo.userName){
            this.goUserPage();
        } else {
            this.setState({
                checking: false
            })
        }
    }
    goUserPage(){
        history.push('/user');
    }
    loginHandle(data){
        this.props.dispatchUserUpdate(data);
        const router = this.props.match.params.router;
        if(router){
            history.push(decodeURIComponent(router));
        } else {
            this.goUserPage();
        }
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchUserUpdate: (data) => {dispatch(userUpdate(data))}
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);