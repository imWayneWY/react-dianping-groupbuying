import React, { Component } from 'react';
import DetailInfo from '../../../components/DetailInfo';
import {getInfoData} from '../../../fetch';

class Info extends Component{
    constructor(){
        super();
        this.state = {
            info: null,
            error: null
        }
    }
    render(){
        return(
            <div>
            {
                this.state.info
                ? <DetailInfo data={this.state.info} />
                : ''
            }
            </div>
        );
    }
    componentDidMount(){
        this.getInfo();
    }
    getInfo(){
        const id = this.props.id;
        getInfoData(id).then(
            response => this.setState({
                info: response.data[0]
            })
        ).catch(
            error => this.setState({
                error
            }) 
        )
    }
}
export default Info;