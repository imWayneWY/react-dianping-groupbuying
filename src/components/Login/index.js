import React, { Component } from 'react';
import './style.css';


class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            userName: ''
        }
    }
    render(){
        return(
            <div id='login-container'>
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="phone number plz"
                        onChange={this.changeHandle.bind(this)}
                        value={this.state.userName}    
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>send</button>
                    <input type="text" placeholder="verify code plz"/>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>Login</button>
            </div>
        );
    }
    changeHandle(e){
        this.setState({
            userName: e.target.value
        });
    }
    clickHandle(e){
        const data = {
            userName: this.state.userName,
            cityName: "Toronto"
        };
        this.props.loginHandle(data);
    }

}
export default LoginComponent;