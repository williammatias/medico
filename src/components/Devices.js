/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text} from 'native-base';
import {Actions} from "react-native-router-flux";

export default class Devices extends Component {

    handleItemSelect(product_code) {
        this.props.getDevice(product_code);
        Actions.Device();
    }

    render() {
        let {devices} = this.props
        return (
            <Container style={{backgroundColor: '#ffffff'}}>
                <Content>
                    <List dataArray={devices}
                          renderRow={(device) =>
                              <ListItem onPress={() => {
                                  this.handleItemSelect(device.product_code)
                              }}>
                                  <Text>{device.device_name}</Text>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}

