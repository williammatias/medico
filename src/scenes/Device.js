/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {
    Body, Card, CardItem, Container, Content, Header, List, ListItem, ScrollableTab, Tab, Tabs, Text,
    View
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
                        <Content>
                            <Card contentContainerStyle={styles.card1}>
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
                            <Card contentContainerStyle={styles.card1}>
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
                            <View style={{flexDirection: 'row'}}>
                                <Card contentContainerStyle={styles.card2}>
                                    <CardItem header>
                                        <Text>Product Code</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                        <Text>
                                            {device.product_code}
                                        </Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                                <Card contentContainerStyle={styles.card2}>
                                    <CardItem header>
                                        <Text>Medical Specialty Description</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                        <Text>
                                            {device.review_panel}
                                        </Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Card contentContainerStyle={styles.card2}>
                                    <CardItem header>
                                        <Text>Medical Specialty</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                        <Text>
                                            {device.medical_specialty}
                                        </Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                                <Card contentContainerStyle={styles.card2}>
                                    <CardItem header>
                                        <Text>Review Code</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                        <Text>
                                            {device.review_code}
                                        </Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </View>
                        </Content>
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
    card1: {
        height: 50,
        width: 50,
    },
    card2: {
        flex: 1,
        height: 50,
        width: 50,
        minWidth: 0,
        overflow: 'visible'
    }
});