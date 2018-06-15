import React, { Component } from 'react';
import {getImage} from '../../utils/getImage'
import './style.css';

class DetailInfo extends Component{
    render(){
        const data = this.props.data;
        return(
            <div>
                <div id="detail-info-container">
                    <div className="info-container clear-fix">
                        <div className="info-img-container float-left">
                            <img src={getImage(data.img)} />
                        </div>
                        <div className="info-content">
                            <h1>{data.title}</h1>
                            <div className="star-container">
                                <span className="price">{data.price}CDN</span>
                            </div>
                            <p className="sub-title">{data.subTitle}</p>
                        </div>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
                </div>
            </div>
        );
    }
}

export default DetailInfo;