/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Body, Container, Content, H3, Header, List, Title} from 'native-base';
import {StyleSheet} from 'react-native';
import CategoryItem from '../containers/CategoryItem';

export default class Categories extends Component {

    render() {
        let {categories} = this.props;

        return (
            <Container>
                <Content padder>
                    <H3 style={styles.title}>Browse All Devices Categories</H3>
                    <List
                        dataArray={categories}
                        contentContainerStyle={styles.container}
                        renderRow={(category) =>
                            <CategoryItem category={category}/>
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
    }
});