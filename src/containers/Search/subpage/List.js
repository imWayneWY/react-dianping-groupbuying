import React, { Component } from 'react';

import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

import { getSearchData } from '../../../fetch';
import { connect } from 'react-redux';

class SearchList extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data} />
                    : <div>{/* Loading */}</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        );
    }
    componentDidMount(){
        this.loadFirstPageData();
    }
    loadFirstPageData(){
        const cityName = this.props.userinfo.cityName;
        const keyword = this.props.keyword || '';
        const category = this.props.categpory;
        const result = getSearchData(this.state.page,cityName,category, keyword);
        this.resultHandle(result);
    }
    resultHandle(result) {
        const page = this.state.page;
        this.setState({
            page: page + 1
        });
        result.then(
           response => this.setState({
               data: this.state.data.concat(response.data[0].data),
               hasMore: response.data[0].hasMore
           })
        ).catch(
            error => this.setState({
                error
            })
        )
    }   
    loadMoreData(){
        this.setState({
            page: page+1,
            isLoadingMore: true
        })
        const cityName = this.props.userinfo.cityName;
        const page = this.state.page;
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        const result = getSearchData(page, cityName, category, keyword);
        this.resultHandle(result);
        this.setState({
            isLoadingMore: false
        })
   }
   componentDidUpdate(prevProps, prevState) {
       const keyword = this.props.keyword;
       const category = this.props.category;

       if(keyword === prevProps.keyword && category === prevProps.category){
           return;
       }

       this.setState({
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
       });

       this.loadFirstPageData();
   }
   componentWillUnmount(){
        this.setState = (state,callback) => {
            return;
        };
   }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList);
