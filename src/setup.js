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

import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import {StyleProvider} from 'native-base';

function setup(): ReactClass<{}> {
    class Root extends React.Component {

        store = storeFactory(initialState)

        componentDidMount() {

            this.store.dispatch(fetchCategories())
        }

        render() {
            return (
                <StyleProvider style={getTheme(platform)}>
                    <Provider store={this.store}>
                        <App/>
                    </Provider>
                </StyleProvider>

            );
        }
    }

    return Root;
}

module.exports = setup;
