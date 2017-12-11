/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Header,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Text,
    Title
} from 'native-base';


export default class Main extends Component<{}> {

    render() {
        let {categories} = this.props
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Medico</Title>
                    </Body>
                </Header>
                <Content>
                    <List dataArray={categories}
                          renderRow={(category) =>
                              <ListItem>
                                  <Text>{category.term} ({category.count})</Text>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}

