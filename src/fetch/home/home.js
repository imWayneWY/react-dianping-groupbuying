import axios from 'axios';
//const api = "https://5b165eb0a1c7e300147c8726.mockapi.io";
const api = process.env.REACT_APP_MY_API_URL;


export const getAdData = () =>  
    axios.get(`${api}/homeAd`)

export const getListData = (city, page) =>
    axios.get(`${api}/homeList`)
//  axios.get(`${api}/homeList/`+city+'/'+page)