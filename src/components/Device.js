/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Text
} from 'native-base';

export default class Device extends Component {


    render() {
        let {device} = this.props
        let fields = []
        for (var key in device) {
            // skip loop if the property is from prototype
            if (!device.hasOwnProperty(key)) continue;
            fields.push(key + ': ' + device[key]);
        }
        return (
            <Container style={{backgroundColor: '#ffffff'}}>
                <Content>
                    <List dataArray={fields}
                          renderRow={(field) =>
                              <ListItem>
                                  <Text>{field}</Text>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}

