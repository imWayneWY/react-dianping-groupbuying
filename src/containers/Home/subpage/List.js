import React, { Component } from 'react';
import { getListData } from '../../../fetch/home/home';
import LoadMore from '../components/LoadMore';

class List extends Component{
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
            <div>
                <h2 className="home-list-title">Guess what you like...</h2>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data} />
                    : <div>{/*Loading*/}</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore 
                        isLoadingMore={this.state.isLoadingMore} 
                        loadMoreFn={this.loadMoreDate.bind(this)}/>
                    : ''
                }
            </div>
        );
    }
    //get first page data
    componentDidMount() {
        this.loadFirstPageData();
    }
    //load first page data
    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, this.state.page);
        this.resultHandle(result);
    }
    //handle the data
    resultHandle(result) {
        result.then(
            response => this.setState({
                data: response.data.data,
                hasMore: response.data.hasMore
            })
        ).catch(
            error => this.setState({
                error
            })
        )
    }
    loadMoreData() {
        this.setState({
            page: page+1,
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName,page);
        this.resultHandle(result);
        this.setState({
            isLoadingMore: false
        })
    }
}

export default List;