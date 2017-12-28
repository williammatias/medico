/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Body, Card, CardItem, Container, Content, Left, List, ListItem, Text, Thumbnail} from 'native-base';
import {Actions} from "react-native-router-flux";
import {StyleSheet} from 'react-native';

import _ from 'lodash/string';

export default class Devices extends Component {

    handleItemSelect(product_code) {
        this.props.getDevice(product_code);
        Actions.Device();
    }

    render() {
        let {devices} = this.props
        return (
            <Container style={{backgroundColor: '#F5F5F5'}}>
                <Content style={{padding: 10}}>
                    <List dataArray={devices}
                          renderRow={(device) =>
                              <Card>
                                  <CardItem button onPress={() => {
                                      this.handleItemSelect(device.product_code)
                                  }}>
                                      <Left>
                                          <Thumbnail small square source={require('../assets/images/ic_pill.png')}/>
                                          <Body>
                                          <Text style={styles.title}>
                                              {
                                                  _.truncate(device.device_name, {
                                                      'length': 30,
                                                      'omission': '..'
                                                  })
                                              }
                                          </Text>
                                          <Text>
                                              {
                                                  _.truncate(_.capitalize(_.lowerCase(device.definition)), {
                                                          'length': 65,
                                                          'separator': ' ',
                                                          'omission': '..'
                                                      }
                                                  )}
                                          </Text>
                                          </Body>
                                      </Left>
                                  </CardItem>
                              </Card>
                          }>
                    </List>


                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold'
    }
});

