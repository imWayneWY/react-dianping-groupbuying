import React, { Component } from 'react';
import history from '../../history';
import "./style.css";

class Header extends Component{
    render(){
        return(
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
    clickHandle(){
        const backRouter = this.props.backRouter;
        if(backRouter) {
            history.push(backRouter);
        } else {
            window.history.back();
        }
 
    }


}

export default Header;