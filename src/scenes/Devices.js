/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Body, Card, CardItem, Container, Content, Left, List, ListItem, Text, Thumbnail, View} from 'native-base';
import {Actions} from "react-native-router-flux";
import {StyleSheet} from 'react-native';
import variable from '../../native-base-theme/variables/platform'
import _ from 'lodash/string';

export default class Devices extends Component {

    handleItemSelect(product_code) {
        this.props.getDevice(product_code);
        Actions.Device();
    }

    render() {
        let {devices} = this.props
        return (
            <Container>
                <Content padder>
                    <List dataArray={devices}
                          renderRow={(device) =>
                              <Card>
                                  <CardItem button onPress={() => {
                                      this.handleItemSelect(device.product_code)
                                  }}>
                                      <Left>
                                          <View style={styles.circle}>
                                              <Text style={styles.logoText}>
                                                  {
                                                      _.truncate(device.device_name, {
                                                          'length': 1,
                                                          'omission': ''
                                                      })
                                                  }
                                              </Text>
                                          </View>
                                          <Body>
                                          <Text style={styles.title}>
                                              {
                                                  _.truncate(device.device_name, {
                                                      'length': 30,
                                                      'omission': '..'
                                                  })
                                              }
                                          </Text>
                                          <Text note>
                                              {
                                                  _.truncate(
                                                      _.capitalize(
                                                          _.lowerCase(device.definition)), {
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
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: 'rgba(0, 0, 0, 0.26)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        color: '#FFFFFF',
        fontFamily: variable.secondaryFont,
        fontWeight: 'bold'
    }
});

