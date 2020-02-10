import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router-dom';
import './style.css';

class Category extends Component{
    constructor(){
        super();
        this.state = {
            index: 0
        };
    }
    render(){
        const opt = {
            auto: 2500,
            callback: function(index) {
                this.setState({index: index});
            }.bind(this)
        };
        return(
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                        <Link to = "/search/jingdian"><li className="float-left jingdian">scenic spot</li></Link>
                        <Link to = "/search/ktv"><li className="float-left ktv">KTV</li></Link>
                        <Link to = "/search/gouwu"><li className="float-left gouwu">shopping</li></Link>
                        <Link to = "/search/shenghuo"><li className="float-left shenghuo">live</li></Link>
                        <Link to = "/search/jianshenyundong"><li className="float-left jianshenyundong">sports</li></Link>
                        <Link to = "/search/meifa"><li className="float-left meifa">hairdressing</li></Link>
                        <Link to = "/search/qunzi"><li className="float-left qinzi">parents-child</li></Link>
                        <Link to = "/search/xiaochikuaican"><li className="float-left xiaochikuaican">snack</li></Link>
                        <Link to = "/search/zizhucan"><li className="float-left zizhucan">buffet</li></Link>
                        <Link to = "/search/jiuba"><li className="float-left jiuba">bar</li></Link>
                        </ul>
                    </div>
                <div className="carousel-item">
                        <ul className="clear-fix">
                        <Link to = "/search/meishi"><li className="float-left meishi">cate</li></Link>
                        <Link to = "/search/dianying"><li className="float-left dianying">movie</li></Link>
                        <Link to = "/search/jiudian"><li className="float-left jiudian">hotel</li></Link>
                        <Link to = "/search/xiuxianyule"><li className="float-left xiuxianyule">entertainment</li></Link>
                        <Link to = "/search/waimai"><li className="float-left waimai">take-out</li></Link>
                        <Link to = "/search/huoguo"><li className="float-left huoguo">hot-pot</li></Link>
                        <Link to = "/search/liren"><li className="float-left liren">beauty</li></Link>
                        <Link to = "/search/dujiachuxing"><li className="float-left dujiachuxing">holiday</li></Link>
                        <Link to = "/search/zuliaoanmo"><li className="float-left zuliaoanmo">massage</li></Link>
                        <Link to = "/search/zhoubianyou"><li className="float-left zhoubianyou">nearby trip</li></Link>
                        </ul>
                    </div>
                <div className="carousel-item">
                        <ul className="clear-fix">
                        <Link to = "/search/ribencai"><li className="float-left ribencai">cuisine</li></Link>
                        <Link to = "/search/SPA"><li className="float-left SPA">SPA</li></Link>
                        <Link to = "/search/jiehun"><li className="float-left jiehun">marriage</li></Link>
                        <Link to = "/search/xuexipeixun"><li className="float-left xuexipeixun">training</li></Link>
                        <Link to = "/search/xican"><li className="float-left xican">restaurant</li></Link>
                        <Link to = "/search/huochejipiao"><li className="float-left huochejipiao">travel</li></Link>
                        <Link to = "/search/shaokao"><li className="float-left shaokao">BBQ</li></Link>
                        <Link to = "/search/jiazhuang"><li className="float-left jiazhuang">furnishing</li></Link>
                        <Link to = "/search/chongwu"><li className="float-left chongwu">pet</li></Link>
                        <Link to = "/search/quanbufenlei"><li className="float-left quanbufenlei">all category</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0? "selected":''}></li>
                        <li className={this.state.index === 1? "selected":''}></li>
                        <li className={this.state.index === 2? "selected":''}></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Category;