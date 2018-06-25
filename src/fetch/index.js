import axios from 'axios';
//const api = "https://5b165eb0a1c7e300147c8726.mockapi.io";
const api = process.env.REACT_APP_MY_API_URL;


export const getAdData = () =>  
    axios.get(`${api}/homeAd`)

export const getListData = (city, page) =>
    axios.get(`${api}/homeList`)
//  axios.get(`${api}/homeList/`+city+'/'+page)

export const getSearchData = (page, city, category, keyword) =>
    axios.get(`${api}/search`)
//  axios.get(`${api}/search/` + page + '/' + cityName + '/' + category + (keyword? '/' + keyword : ''))

export const getInfoData = (id) =>
    axios.get(`${api}/info/`)
//  axios.get(`${api}/detail/info/`+id)

export const getCommentData = (id,page) =>
    axios.get(`${api}/comment`)
//  axios.get(`${api}/detail/comment/`+id+'/'+page)

export const getOrderListData = (userName) =>
//  axios.get(`${api}/`+userName+'/orderList')
    axios.get(`${api}/orderList`)