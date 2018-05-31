import React, { Component } from 'react';
import './style.css';

class Category extends Component{
    render(){
        return(
            <div id="home-category">
                <div className="carousel-item">
                    <ul className="clear-fix">
                       <li className="float-left jindian">scenic spot</li>
                       <li className="float-left ktv">KTV</li>
                       <li className="float-left gouwu">shopping</li>
                       <li className="float-left shenghuo">live</li>
                       <li className="float-left jianshenyundong">sports</li>
                       <li className="float-left meifa">hairdressing</li>
                       <li className="float-left qinzi">parents-child</li>
                       <li className="float-left xiaochikuaican">snack</li>
                       <li className="float-left zizhucan">buffet</li>
                        <li className="float-left jiuba">bar</li>
                    </ul>
                </div>
               <div className="carousel-item">
                    <ul className="clear-fix">
                       <li className="float-left meishi">cate</li>
                       <li className="float-left dianying">movie</li>
                       <li className="float-left jiudian">hotel</li>
                       <li className="float-left xiuxianyule">entertainment</li>
                       <li className="float-left waimai">take-out</li>
                       <li className="float-left huoguo">hot-pot</li>
                       <li className="float-left liren">beauty</li>
                       <li className="float-left dujiachuxing">holiday</li>
                       <li className="float-left ziliaoanmo">massage</li>
                        <li className="float-left zhoubianyou">travel nearby</li>
                    </ul>
                </div>
               <div className="carousel-item">
                    <ul className="clear-fix">
                       <li className="float-left ribencai">Japanese cuisine</li>
                       <li className="float-left SPA">SPA</li>
                       <li className="float-left jiehun">marriage</li>
                       <li className="float-left xuexipeixun">training</li>
                       <li className="float-left xican">restaurant</li>
                       <li className="float-left huochejipiao">travel tickets</li>
                       <li className="float-left shaokao">BBQ</li>
                       <li className="float-left jiazhuang">furnishing</li>
                       <li classname="float-left chongwu">pet</li>
                        <li className="float-left quanbufenlei">all category</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Category;