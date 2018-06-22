import { USER_CITY_UPDATE, USER_UPDATE } from '../actions/';


export default function userinfo (state={cityName: 'Saskatoon'}, action) {
    switch(action.type){
        case USER_UPDATE:
            return action.data;
        case USER_CITY_UPDATE:
            state.cityName = action.cityName;
            return state;
        default:
            return state;
    }
}