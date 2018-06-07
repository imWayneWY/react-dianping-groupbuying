import React, { Component } from 'react';
import './style.css';

class HomeAd extends Component {
    render(){
        return(
            <div id="home-ad">
                <h2>Huge Sale! </h2>
                <div className="ad-container clear-fix">
                    {
                        this.props.data.map((item, index) => {
                            return(
                                <div key={index} className="ad-item float-left">
                                    <a href={item.link} target="_blank">
                                        <img src={item.img} alt={item.title}/>
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default HomeAd;