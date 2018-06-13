import React, { Component } from 'react';
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/List';

class Search extends Component{
    render(){
        const params = this.props.match.params;
        return(
            <div>
                <SearchHeader keyword={params.keyword} />
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        );
    }
}
export default Search;
