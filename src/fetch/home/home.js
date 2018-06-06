import axios from 'axios';
const api = "https://5b165eb0a1c7e300147c8726.mockapi.io";


export const getAdData = () =>  
    axios.get(`${api}/homeAd`)
