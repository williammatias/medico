/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */
// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import DevicesCategories from "./containers/DevicesCategories";
import Devices from "./containers/Devices";

export default class App extends Component{
    render(){
        return(
            <Router>
                <Scene key="root">
                    <Scene key="DevicesCategories" component={DevicesCategories} title="Devices Categories" initial={true} />
                    <Scene key="Devices" component={Devices} title="Devices" />
                </Scene>
            </Router>
        );
    }
}