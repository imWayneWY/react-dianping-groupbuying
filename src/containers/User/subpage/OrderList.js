import React, { Component } from 'react';
import { getOrderListData } from '../../../fetch';
import OrderListComponent from '../../../components/OrderList';
import './style.css';

class OrderList extends Component{
    constructor(){
        super();
        this.state = {
            isLoad: false,
            data: [],
            error: null
        }
    }
    render(){
        return(
            <div className="order-list-container">
                <h2>Your Order</h2>
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data}/>
                    : <div>{/* Loading */}</div>
                }
            </div>
        );
    }
    componentDidMount(){
        const userName = this.props.userName;
        if(userName){
            this.loadOrderList(userName);
        }
    }
    loadOrderList(userName){
        getOrderListData().then(
            response => {
                this.setState({
                    data: response.data,
                    isLoad: true
                })
            }
        ).catch(
            error => {
                this.setState({
                    error,
                    isLoad: true
                })
            }
        )
    }
}

export default OrderList;