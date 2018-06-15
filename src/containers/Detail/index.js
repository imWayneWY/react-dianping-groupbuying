import React, { Component } from 'react';
import Info from './subpage/Info';
import Comment from './subpage/Comment';
import Header from '../../components/Header';

class Detail extends Component{
    render(){
        const id =this.props.match.params.id;
        return(
            <div>
                <Header title="Detail for merchant"/>
                <Info id={id}/>
                <Comment id={id}/>
            </div>
        );
    }
}

export default Detail;