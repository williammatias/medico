/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Container, Content, List, ListItem, StyleProvider, Text} from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import { Actions } from 'react-native-router-flux';

export default class DevicesCategories extends Component {

    render() {
        let {categories} = this.props
        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={{backgroundColor: '#ffffff'}}>
                    <Content>
                        <List dataArray={categories}
                              renderRow={(category) =>
                                  <ListItem onPress= {() =>{ Actions.Devices()}}>
                                      <Text>{category.term} ({category.count})</Text>
                                  </ListItem>
                              }>
                        </List>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

