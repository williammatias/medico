/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
    Container,
    Content,
    Card,
    CardItem,
    Text,
    Button,
    Header,
    Left,
    Right,
    Icon,
    Body,
    Title
} from 'native-base';


export default class App extends Component<{}> {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Medico</Title>
                    </Body>
                </Header>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
