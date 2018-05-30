import React, { Component } from 'react';

class HomeHeader extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div>
                    <span>Saskaton</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
            </div>  
        );
    }
}

export default HomeHeader;