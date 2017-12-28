/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Card, Container, Content, Header, List, ListItem, ScrollableTab, Tab, Tabs, Text} from 'native-base';

export default class Device extends Component {


    render() {
        let {device} = this.props;
        let registration_number = [];
        let fei_number = [];
        let k_number = [];
        if(device.openfda){
            registration_number = device.openfda.registration_number;
            fei_number = device.openfda.fei_number;
            k_number = device.openfda.k_number;
        }
        return (
            <Container style={{backgroundColor: '#ffffff'}}>
                <Tabs renderTabBar={() => <ScrollableTab/>}>
                    <Tab heading="Details">
                        <Card/>
                    </Tab>
                    <Tab heading="Registration N#">
                        <List dataArray={registration_number}
                              renderRow={(item) =>
                                  <ListItem>
                                      <Text>{item}</Text>
                                  </ListItem>
                              }>
                        </List>
                    </Tab>
                    <Tab heading="FEI N#">
                        <List dataArray={fei_number}
                              renderRow={(item) =>
                                  <ListItem>
                                      <Text>{item}</Text>
                                  </ListItem>
                              }>
                        </List>
                    </Tab>
                    <Tab heading="K N#">
                        <List dataArray={k_number}
                              renderRow={(item) =>
                                  <ListItem>
                                      <Text>{item}</Text>
                                  </ListItem>
                              }>
                        </List>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

