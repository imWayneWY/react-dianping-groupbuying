import { STORE_ADD, STORE_DEL } from '../actions';

export default function store(state=[],action){
    switch(action.type){
        case STORE_ADD:
            state.unshift(action.itemID);
            return state;
        case STORE_DEL:
            return state.filter(itemID => {
                if(itemID !== action.itemID)
                    return itemID;
            });
        default:
            return state;
    }
}