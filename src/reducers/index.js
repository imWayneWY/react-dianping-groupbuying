import { combineReducers } from 'redux';
import userinfo from './userinfo';
import store from './store';
export const RootReducer = combineReducers({
    userinfo,
    store
});