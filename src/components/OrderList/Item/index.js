import React, { Component } from 'react';
import {getImage} from '../../../utils/getImage';
import Star from '../../Star';
import {updateOrderList} from '../../../fetch';

import './style.css';

class Item extends Component{
    constructor(){
        super();
        this.state={
            commentState: 2, //0: unCommet  1: commenting 2: cpmmented
            stars: {},
            error: null
        }
    }
    render(){
        const data = this.props.data;
        return(
            <div className="order-item-container">
                <div className="clear-fix">
                    <div className="order-item-img float-left">
                        <img src={getImage(data.img)}/>
                    </div>
                    <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0
                        //haven't comment
                        ? <button className="btn" onClick={this.showComment.bind(this)}>Comment</button>
                        :
                            //commenting
                            this.state.commentState === 1
                            ? ''
                            // already commented
                            : <button className="btn unseleted-btn">Commented</button>
                    }
                    </div>
                    <div className="order-item-content">
                        <span>Merchant :{data.title}</span>
                        <span>Count    :{data.count}</span>
                        <span>Price    :${data.proce}</span>
                    </div>
                </div>
                {
                    //this only show when it is commenting
                    this.state.commentState === 1
                    ? <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                            <Star star="0" clickCallback={this.starClickCallback.bind(this)}/>
                        </div>
                        <button className="btn" onClick={this.submitComment.bind(this)}>submit</button>
                        &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>cancel</button>
                    </div>
                    : ''
                }
            </div>
        );
    }
    componentDidMount(){
        this.setState({
            commentState: this.props.data.commentState
        });
    }
    showComment(){
        this.setState({
            commentState: 1
        })
    }
    submitComment(){
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        const star = this.state.stars[id] || '0';
        const commentText = this.refs.commentText;
        const value = commentText.value.trim();
        if(!value){
            return;
        }
        submitComment(id,value,star,this.commentOK.bind(this));
    }
    commentOK(){
        const id = this.props.data.id;
        let data = this.props.data;
        data = {
            commentState: 2
        }
        updateOrderList(this.props.userName,id,data).then(
            response=>{}
        ).catch(
            error=>{
                this.setState({
                    error
                })
            }
        );


        this.setState({
            commentState: 2
        })    
    }
    hideComment(){
        this.setState({
            commentState: 0
        })
    }
    starClickCallback(star){
        let stars=this.state.stars;
        const id = this.props.data.id;
        stars[id] = star;

        this.setState({
            stars: stars
        });
    }
}
export default Item;