/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Card, CardItem, Container, Content, List, ListItem, Text, Thumbnail, View} from 'native-base';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Categories extends Component {

    handleItemSelect(category) {
        this.props.getDevices(category);
        Actions.Devices();
    }

    render() {
        let {categories} = this.props;

        return (
            <Container style={{backgroundColor: '#ffffff'}}>
                <Content>
                    <List
                        dataArray={categories}
                        contentContainerStyle={styles.cardsContainer}
                        renderRow={(category) =>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => {
                                    this.handleItemSelect(category.term)
                                }}>
                                <Thumbnail square source={require('../assets/images/ic_pill.png')}/>
                                <Text>
                                    {category.term}
                                </Text>
                            </TouchableOpacity>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    cardsContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    card: {
        margin: 5,
        width: Dimensions.get('window').width / 4, //Device width divided in almost a half
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 150,
    },
});