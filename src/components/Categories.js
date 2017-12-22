/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Button, Card, CardItem, Container, Content, H3, List, ListItem, Text, Thumbnail, View} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import _ from 'lodash/string';
export default class Categories extends Component {

    handleItemSelect(category) {
        this.props.getDevices(category);
        Actions.Devices();
    }

    render() {
        let {categories} = this.props;

        return (
            <Container style={{backgroundColor: '#F5F5F5'}}>
                <Content>
                    <H3 style={styles.title}>Browse All Devices Categories</H3>
                    <List
                        dataArray={categories}
                        contentContainerStyle={styles.container}
                        renderRow={(category) =>
                            <Button transparent
                                style={styles.button}
                                onPress={() => {
                                    this.handleItemSelect(category.term)
                                }}>
                                    <View style={styles.buttonView}>
                                        <Thumbnail square source={require('../assets/images/ic_pill.png')}/>
                                        <Text style={styles.buttonText}>
                                            {_.truncate(_.capitalize(category.term), {
                                                'length': 9,
                                                'separator': ' ',
                                                'omission': '..'
                                            })}
                                        </Text>
                                    </View>
                            </Button>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    title: {
        textAlign: 'center',
        marginTop: 39,
        marginBottom: 39
    },
    button: {
        backgroundColor: '#ffffff',
        margin: 5,
        width: Dimensions.get('window').width / 3.5, //Device width divided in almost a half
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 125,
        borderRadius: 6,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 14,
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
        width:  (Dimensions.get('window').width / 3.5) - 20
    }
});