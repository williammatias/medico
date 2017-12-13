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

export const devices = (state = {}, action) => {
    switch (action.type) {
        case constants.FETCH_DEVICES:
            return action.payload
        default:
            return state
    }
}

export const device = (state = {}, action) => {
    switch (action.type) {
        case constants.FETCH_DEVICE:
            return action.payload
        default:
            return state
    }
}


export default combineReducers({
    categories,
    devices,
    device
})