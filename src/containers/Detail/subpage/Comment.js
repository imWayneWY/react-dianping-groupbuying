import React, { Component } from 'react';
import ListComponent from '../../../components/CommentList';
import LoadMore from '../../../components/LoadMore';
import {getCommentData} from '../../../fetch';
import './style.css';

class Comment extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0,
            error: null
        }
    }
    render(){
        return(
            <div className="detail-comment-subpage">
                <h2>User Comments</h2>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data} />
                    : <div>{/* Loading */}</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore 
                        isLoadingMore={this.state.isLoadingMore} 
                        loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        );
    }
    componentDidMount(){
        this.loadFirstPageData();
    }
    loadFirstPageData(){
        const id = this.props.id;
        const result = getCommentData(id,this.state.page);
        this.resultHandle(result);
    }
    resultHandle(result){
        result.then(
            response => this.setState({
                hasMore: response.data[0].hasMore,
                data: this.state.data.concat(response.data[0].data)
            })
        ).catch(
            error => this.setState({
                error
            })
        )
    }
    loadMoreData() {
        this.setState({
            isLoadingMore: true,
            page: this.state.page+1
        });

        const id = this.props.id;
        const result = getCommentData(id,this.state.page);

        this.setState({
            isLoadingMore: false
        })
    }
}

export default Comment;