/**
 * Medico Main Screen
 * @author William Matias <matias.b.william@gmail.com>
 */

import React, {Component} from 'react';
import {Container, Content, H3, List} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import CategoryItem from '../containers/CategoryItem';
export default class Categories extends Component {

    render() {
        let {categories} = this.props;

        return (
            <Container style={{backgroundColor: '#F5F5F5'}}>
                <Content>
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