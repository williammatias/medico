/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {
    Button, Card, CardItem, Container, Content, Header, Icon, List, ListItem, ScrollableTab, Tab, Tabs, Text, Title,
    View
} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import DeviceDetails from '../components/DeviceDetails';

import variable from '../../native-base-theme/variables/platform';

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
            <Container>
                <Tabs renderTabBar={() => <ScrollableTab/>}>
                    <Tab heading="Details">
                        <Content padder>
                            <DeviceDetails device={device}/>
                        </Content>
                    </Tab>
                    <Tab heading="Registration N#">
                        <Content padder>
                            <List dataArray={registration_number}
                                  renderRow={(item) =>
                                      <Card style={styles.card}>
                                          <CardItem style={styles.cardItem}>
                                              <Text style={styles.cardText}>{item}</Text>
                                          </CardItem>
                                      </Card>
                                  }>
                            </List>
                        </Content>
                    </Tab>
                    <Tab heading="FEI N#">
                        <Content padder>

                            <List dataArray={fei_number}
                                  renderRow={(item) =>
                                      <Card style={styles.card}>
                                          <CardItem style={styles.cardItem}>
                                              <Text style={styles.cardText}>{item}</Text>
                                          </CardItem>

                                      </Card>
                                  }>
                            </List>
                        </Content>
                    </Tab>
                    <Tab heading="K N#">
                        <Content padder>
                            <List dataArray={k_number}
                                  renderRow={(item) =>
                                      <Card style={styles.card}>
                                          <CardItem style={styles.cardItem}>
                                              <Text style={styles.cardText}>{item}</Text>
                                          </CardItem>
                                      </Card>
                                  }>
                            </List>
                        </Content>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    card: {
        width: (Dimensions.get('window').width) - 20,
        height: 106
    },
    cardItem: {
        justifyContent: 'center',
        paddingTop: 40
    },
    cardText: {
        color: variable.brandPrimary,
        fontWeight: '600',
        fontSize: 18,
    }
});