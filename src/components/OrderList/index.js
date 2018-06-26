import React, { Component } from 'react';
import Item from './Item'

class OrderListComponent extends Component{
    render(){
        return(
            <div>
                {
                    this.props.data.map((item, index)=>{
                        return<Item 
                            key={index} 
                            userName={this.props.userName} 
                            data={item} 
                            submitComment={this.props.submitComment}/>
                    })
                }
            </div>
        );
    }
}
export default OrderListComponent;