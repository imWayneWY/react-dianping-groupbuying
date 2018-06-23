import React, { Component } from 'react';
import BuyAndStore from '../../../components/BuyAndStore';
import { connect } from 'react-redux';
import { storeAdd,storeDel } from '../../../actions';
import history from '../../../history';


class Buy extends Component{
    constructor(){
        super();
        this.state={
            isStore: false
        }
    }
    render(){
        return(
            <BuyAndStore 
                isStore={this.state.isStore} 
                storeHandle={this.storeHandle.bind(this)} 
                buyHandle={this.buyHandle.bind(this)}
            />
        );
    }
    componentDidMount(){
        this.checkStoreState();
    }
    checkStoreState(){
        const id = this.props.id;
        const store = this.props.store;

        store.forEach(itemID => {
            if(itemID === id){
                this.setState({
                    isStore: true
                });
                return false; //jump out the loop
            }
        });
    }
    loginCheck(){
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if(!userinfo.userName) {
            history.push('/login/'+encodeURIComponent('/detail/'+id));
            return false;
        }
        return true;
    }
    storeHandle(){
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return;
        }
        const id = this.props.id;

        if(this.state.isStore){
            this.props.dispatchStoreDel(id);
        } else {
            this.props.dispatchStoreAdd(id);
        }

        this.setState({
            isStore: !this.state.isStore
        });
    }
    buyHandle(){
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return;
        }
        const id = this.props.id;
        /* similate buy process */
        history.push('/');
    }
}

function mapStateToProps(state){
    return{
        userinfo: state.userinfo,
        store: state.store
    }
}
function mapDispatchToProps(dispatch){
    return{
        dispatchStoreAdd: (itemID)=>{dispatch(storeAdd(itemID))},
        dispatchStoreDel: (itemID)=>{dispatch(storeDel(itemID))}
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy);