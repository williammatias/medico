/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */
// RNRF logic here
import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import DevicesCategories from "./containers/Categories";
import Devices from "./containers/Devices";
import Device from "./containers/Device";
import platform from '../native-base-theme/variables/platform';
import CustomNavBar from './containers/CustomNavBar';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="DevicesCategories"
                        navBar={CustomNavBar}
                        component={DevicesCategories}
                        title="Medico"
                        back
                        initial={true}/>
                    <Scene
                        key="Devices"
                        title="Devices"
                        navBar={CustomNavBar}
                        component={Devices}
                        back/>
                    <Scene
                        key="Device"
                        title="Device"
                        navBar={CustomNavBar}
                        component={Device}
                        back
                    />
                </Scene>
            </Router>
        );
    }
}

const getSceneStyle = () => ({
    backgroundColor: platform.brandPrimary,
    shadowOpacity: 1,
    shadowRadius: 3,
});