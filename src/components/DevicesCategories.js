/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class DevicesCategories extends Component {

    handleItemSelect(category) {
        this.props.getDevices(category);
        Actions.Devices();
    }

    render() {
        let {categories} = this.props

        return (
            <Container style={{backgroundColor: '#ffffff'}}>
                <Content>
                    <List dataArray={categories}
                          renderRow={(category) =>
                              <ListItem onPress={() => {
                                  this.handleItemSelect(category.term)
                              }}>
                                  <Text>{category.term} ({category.count})</Text>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}

