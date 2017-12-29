/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';

import {StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import _ from 'lodash/string';

export default class CustomNavBar extends Component {

    _renderLeft() {
        let {initial} = this.props;
        if (!initial) {
            return (
                <Left>
                    <Button transparent onPress={() => {
                        Actions.pop()
                    }}>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>
            )
        } else {
            return (
                <Left></Left>
            )
        }
    }

    _renderMiddle() {
        let {title, device} = this.props;
        switch (title) {
            case 'Device':
                return (
                    <Body>
                    <Title>
                        {device.device_name}
                    </Title>
                    </Body>
                );
            default:
                return (
                    <Body>
                    <Title>
                        {title}
                    </Title>
                    </Body>
                );
        }

    }


    render() {

        return (
            <Header style={styles.header}>
                {this._renderLeft()}
                {this._renderMiddle()}
                <Right>
                </Right>
            </Header>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 0,
    }

});