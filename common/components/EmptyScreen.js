/**
 * Created by jwilliamson on 3/16/17.
 */
import React, { Component } from 'react';
import {
    ActivityIndicator,
    Button,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
class EmptyScreen extends React.Component {
    static navigationOptions = {
        tabBar: {
            label: ' ',
            icon: ({ tintColor }) => (
                <Text></Text>
            ),
        },
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A4F4',
    },
    logo: {
        width: 128,
        height: 51
    }
});

module.exports = EmptyScreen;
