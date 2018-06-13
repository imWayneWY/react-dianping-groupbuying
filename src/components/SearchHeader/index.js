import React,{ Component } from 'react';
import SearchInput from '../SearchInput';

import './style.css';

class SearchHeader extends Component {
    render(){
        return(
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left">
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value={this.props.keyword || ''} />
                </div>
            </div>
        );
    }
}

export default SearchHeader;