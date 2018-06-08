import React, { Component } from 'react';
import { getImage } from '../../../utils/getImage';
import './style.css';

class ListItem extends Component {
    render(){
        const data = this.props.data;
        return(
            <div className="list-item clear-fix">
                <div className="item-img-container float-left">
                    <img src={getImage(data.img)} alt={data.title} />
                </div>
                <div className="item-content">
                    <div className="item-title-container clear-fix">
                        <h3 className="float-left">{data.title}</h3>
                        <span className="floaat-right">{data.distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {data.subTitle}
                    </p>
                    <div className="item-price-container clear-fix">
                        <span className="price float-left">CDN:{data.price}</span>
                        <span className="mumber float-right">{data.mumber} have been sold</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;