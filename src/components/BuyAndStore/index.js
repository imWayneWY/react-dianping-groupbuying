import React, { Component } from 'react';
import './style.css';

class BuyAndStore extends Component{
    render(){
        return(
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        this.props.isStore
                        ? <button className="selected" onClick={this.storeClickHandle.bind(this)}>farvirate</button>
                        : <button onClick={this.storeClickHandle.bind(this)}>farvirate</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyClickHandle.bind(this)}>buy</button>
                </div>
            </div>
        );
    }
    storeClickHandle(){
        this.props.storeHandle();
    }
    buyClickHandle(){
        this.props.buyHandle();
    }
}

export default BuyAndStore;