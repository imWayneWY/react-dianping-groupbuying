import React, { Component } from 'react';
import Item from './Item';
import './style.css';

class List extends Component {
    render(){
        return(
            <div className="list-container">
                {
                    this.props.data.map((item,index)=> {
                        return <Item key={index} data={item}/>
                    })
                }
            </div>
        );
    }
}

export default List;