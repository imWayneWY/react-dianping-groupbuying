import React, { Component } from 'react';
import Item from './Item';

import './style.css';

class CommentList extends Component{
    render(){
        const data = this.props.data;
        return(
            <div className="comment-list">
                {data.map((item,index) => {
                    return <Item key={index} data={item}/>
                })
                }
            </div>
        );
    }
}

export default CommentList;