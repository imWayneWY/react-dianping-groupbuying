import { USER_CITY_UPDATE } from '../actions/';


export default function userinfo (state={cityName: 'Saskatoon'}, action) {
    switch(action.type){
        case USER_CITY_UPDATE:
            state.cityName = action.cityName;
            return state;
        default:
            return state;
    }
}