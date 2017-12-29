/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Body, Card, CardItem, Content, Text, View} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';


export default class DeviceDetails extends Component {

    render() {
        let {device} = this.props;

        return (
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
                            <Text>Unclassified Reason</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                {device.unclassified_reason}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card contentContainerStyle={styles.card2}>
                        <CardItem header>
                            <Text>Device Class</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                {device.device_class}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Card contentContainerStyle={styles.card2}>
                        <CardItem header>
                            <Text>Implant Flag</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                {device.implant_flag}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card contentContainerStyle={styles.card2}>
                        <CardItem header>
                            <Text>Regulation Number</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                {device.regulation_number}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Card contentContainerStyle={styles.card2}>
                        <CardItem header>
                            <Text>Gmp Exempt Flag</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                {device.gmp_exempt_flag}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card contentContainerStyle={styles.card2}>

                    </Card>
                </View>
            </Content>

        );
    }
}

const styles = StyleSheet.create({

    button: {
        margin: 5,
        width: Dimensions.get('window').width / 3.5, //Device width divided in almost a half
        justifyContent: 'center',
        alignItems: 'center',
        height: 125,
    },
    buttonView: {
        height: 125,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#aaaaaa',
        marginTop: 10,
        textAlign: 'center',
        width: (Dimensions.get('window').width / 3.5) - 20
    }
});