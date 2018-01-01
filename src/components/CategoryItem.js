/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Button, Card, CardItem, Container, Content, H3, List, ListItem, Text, Thumbnail, View} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import _ from 'lodash/string';
import * as cardTheme from '../../native-base-theme/components/Card'
export default class CategoryItem extends Component {

    handleItemSelect(category) {
        this.props.getDevices(category);
        Actions.Devices();
    }

    render() {
        let {category} = this.props;

        return (
            <Button transparent
                    style={styles.button}
                    onPress={() => {
                        this.handleItemSelect(category.term)
                    }}>
                <Card style={styles.card}>
                    <Thumbnail small square source={require('../assets/images/ic_pill.png')}/>
                    <Text style={styles.text}>
                        {_.truncate(_.capitalize(category.term), {
                            'length': 9,
                            'separator': ' ',
                            'omission': '..'
                        })}
                    </Text>
                </Card>
            </Button>

        );
    }
}

const styles = StyleSheet.create({

    button: {
        margin: 5,
        width: Dimensions.get('window').width / 3.7, //Device width divided in almost a half
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
    },
    card: {
        height: 105,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#aaaaaa',
        marginTop: 10,
        textAlign: 'center',
        width: (Dimensions.get('window').width / 3.5) - 20
    }
});