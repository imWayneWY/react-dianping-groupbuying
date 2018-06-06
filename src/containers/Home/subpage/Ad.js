import React, { Component } from 'react';
import HomeAd from '../../../components/HomeAd';
import { getAdData } from '../../../fetch/home/home';

class Ad extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            isLoaded: false,
            error: null
        }
    }
    render() {
        return(
            <div>
            {
                this.state.data.length ?
                <HomeAd data={this.state.data}/> :
                <div>{/* Loading */}</div>
            }
            </div>
        );
    }
    componentDidMount(){
        getAdData().then(
            response => this.setState({
                data: response.data,
                isLoaded: true
            })
        ).catch(
            error => this.setState({
                isLoaded: true,
                error  // error : error 
            })
        )
        console.log(this.state.data);
    }
}
export default Ad;