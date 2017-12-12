/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React from 'react';


import {Provider} from "react-redux";
import storeFactory from './store'
import initialState from './initialState.json'
import {fetchCategories} from "./actions";
import App from "./App";


function setup(): ReactClass<{}> {
    class Root extends React.Component {

        store = storeFactory(initialState)

        componentDidMount() {

            this.store.dispatch(fetchCategories())
        }

        render() {
            return (
                <Provider store={this.store}>
                    <App/>
                </Provider>
            );
        }
    }

    return Root;
}

module.exports = setup;
