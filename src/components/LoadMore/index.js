import React, { Component } from 'react';
import './style.css';

class LoadMore extends Component {
    render(){
        return(
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>Loading</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>Load more</span>
                }
            </div>
        )
    }
    loadMoreHandle() {
        this.props.loadMoreFn();
    }
}

export default LoadMore;