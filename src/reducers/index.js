import constants from '../constants';
import {combineReducers} from "redux";

export const categories = (state = {}, action) => {
    switch (action.type) {
        case constants.FETCH_CATEGORIES:
            return action.payload
        default:
            return state
    }
}


export default combineReducers({
    categories
})