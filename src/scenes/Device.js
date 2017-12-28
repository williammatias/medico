/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {
    Body, Card, CardItem, Container, Content, Header, List, ListItem, ScrollableTab, Tab, Tabs,
    Text
} from 'native-base';
import {StyleSheet} from 'react-native';

export default class Device extends Component {


    render() {
        let {device} = this.props;
        let registration_number = [];
        let fei_number = [];
        let k_number = [];
        if (device.openfda) {
            registration_number = device.openfda.registration_number;
            fei_number = device.openfda.fei_number;
            k_number = device.openfda.k_number;
        }
        return (
            <Container style={{backgroundColor: '#ffffff'}}>
                <Tabs renderTabBar={() => <ScrollableTab/>}>
                    <Tab heading="Details">
                        <Card style={styles.buttonView}>
                            <CardItem header>
                                <Text>Device's Name</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text>
                                    {device.device_name}
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card contentContainerStyle={styles.buttonView}>
                            <CardItem header>
                                <Text>Medical Specialty Description</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text>
                                    {device.definition}
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
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


const styles = StyleSheet.create({

    button: {
        backgroundColor: '#ffffff',
        margin: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 125,
        borderRadius: 5,
        shadowColor: '#AAAAAA',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1.0,
    },
    buttonView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    buttonText: {
        color: '#aaaaaa',
        marginTop: 10,
        textAlign: 'center',
    }
});