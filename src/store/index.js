import appReducer from '../reducers'
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const consoleMessages = store => next => action => {
    let result
    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log(`State ${JSON.stringify(store.getState())}`)
    result = next(action)

    let {categories} = store.getState()
    console.log(`
        categories: ${JSON.stringify(categories)}
    `)
    console.groupEnd()
    return result
}


export default (initialState={}) => {
    return applyMiddleware(thunk)(createStore)(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    // return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}