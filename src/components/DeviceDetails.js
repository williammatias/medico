/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Body, Card, CardItem, Content, Text, View} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import variable from '../../native-base-theme/variables/platform';


export default class DeviceDetails extends Component {

    render() {
        let {device} = this.props;

        return (
            <Content>
                <Card>
                    <CardItem header>
                        <Text>Device's Name</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Text note style={styles.brandText}>
                            {device.device_name}
                        </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header>
                        <Text>Medical Specialty Description</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Text note style={styles.brandText}>
                            {device.definition}
                        </Text>
                        </Body>
                    </CardItem>
                </Card>
                <View style={styles.rowCardContainer}>
                    <Card style={styles.rowCard}>
                        <CardItem header>
                            <Text>Product Code</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text style={styles.bigBrandText}>
                                {device.product_code}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.rowCard}>
                        <CardItem header>
                            <Text>Medical Specialty Description</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text style={styles.bigBrandText}>
                                {device.review_panel}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.rowCard}>
                        <CardItem header>
                            <Text>Unclassified Reason</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text style={styles.bigBrandText}>
                                {device.unclassified_reason}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.rowCard}>
                        <CardItem header>
                            <Text>Device Class</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text style={styles.bigBrandText}>
                                {device.device_class}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.rowCard}>
                        <CardItem header>
                            <Text>Implant Flag</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text style={styles.bigBrandText}>
                                {device.implant_flag}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.rowCard}>
                        <CardItem header>
                            <Text>Regulation Number</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text style={styles.brandText}>
                                {device.regulation_number}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.rowCard}>
                        <CardItem header>
                            <Text>Gmp Exempt Flag</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text style={styles.bigBrandText}>
                                {device.gmp_exempt_flag}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </Content>

        );
    }
}

const styles = StyleSheet.create({

    rowCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    rowCard: {
        width: Dimensions.get('window').width / 2 - 20,
        justifyContent: 'center',
    },
    brandText: {
        color: variable.brandPrimary,
        fontSize: 18,

    },
    bigBrandText: {
        color: variable.brandPrimary,
        fontSize: 48,
        alignSelf: 'center',
    }
});