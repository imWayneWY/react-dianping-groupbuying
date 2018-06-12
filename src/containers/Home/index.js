import React,{ Component } from 'react';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';
import { connect } from 'react-redux';

class Home extends Component{
    constructor(){
        super();
    }
    render(){
        const {userinfo} = this.props;
        return(
            <div>
                <HomeHeader cityName = {userinfo.cityName}/>
                <Category />
                <div style={{height: '15px'}}>{/*split line*/}</div>
                <Ad/>
                <List cityName={userinfo.cityName} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
