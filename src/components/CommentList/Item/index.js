import React, { Component } from 'react';
import './style.css';

class CommentItem extends Component{
    render(){
        const item = this.props.data;

        return(
            <div classNmae="comment-item">
                <h3>
                    <i className="icon-user"></i>
                    &nbsp;
                    {item.username}
                </h3>
                <p>{item.comment}</p>
            </div>
        );
    }
}

export default CommentItem;