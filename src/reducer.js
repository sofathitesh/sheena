import {combineReducers} from "redux";
import {ALL_DATA_FROM_API} from "./constant";

function getData(state = [], action){
    switch(action.type){
        case ALL_DATA_FROM_API:
            return {
                ...state,
                data:  action.data
            }
        default:
            return state
    }
}

export const finalReducer = combineReducers({getData});
